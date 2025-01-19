export function logInfo(message: string) {
    console.log('\x1b[34m%s\x1b[0m',`[INFO]: ${message}`);
}

export function logError(message: string,error: unknown) {
    console.error('\x1b[31m%s\x1b[0m',`[ERROR]: ${message}`,error);
}
