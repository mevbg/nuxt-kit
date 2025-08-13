// This script is meant to run server-side only

import { createError } from 'h3';
import type { NitroFetchOptions } from 'nitropack';

const timeoutRequestPromise = async <T>(
  promiseFunc: (signal: AbortSignal) => Promise<T>,
  timeoutDuration: number
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

  try {
    return await promiseFunc(controller.signal);
  } catch (err) {
    if (controller.signal.aborted) {
      throw createError({
        statusCode: 408,
        statusMessage: 'Request Timeout'
      });
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
};

export function requestWithTimeout<T = unknown>(
  endpoint: string,
  config: NitroFetchOptions<
    string,
    'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace'
  > = {},
  timeoutDuration: number = 5000
): Promise<T> {
  // Set NODE_TLS_REJECT_UNAUTHORIZED for development to handle self-signed certificates
  if (process.env.NODE_ENV === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }

  return timeoutRequestPromise(
    (signal) =>
      $fetch(`${process.env.API_URL}/${endpoint}`, {
        signal,
        ...config
      }),
    timeoutDuration
  );
}

export function handleResponse(
  response: PromiseFulfilledResult<unknown>,
  resolve = (value: unknown) => value
): unknown {
  return response.status === 'fulfilled' ? resolve(response.value) : null;
}
