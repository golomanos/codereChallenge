import { test } from '@playwright/test';

export async function checkAccessDenied(response) {
    if (response) {
        const status = response.status();
        if (status === 401 || status === 403) {
            test.skip(true, `Skipping test due to access denied error with status code: ${status}`);
        }
    }
}