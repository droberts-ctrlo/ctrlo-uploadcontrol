import { jest } from '@jest/globals';
import type { XmlHttpRequestLike } from '../UploadControl';

export class MockXhr implements XmlHttpRequestLike {
    open: (method: string, url: string) => void = jest.fn();
    onabort?: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null | undefined = jest.fn();
    onerror?: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null | undefined = jest.fn();
    onprogress?: ((e: ProgressEvent) => void) | null | undefined = jest.fn();
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null = jest.fn();
    send: (data?: Document | XMLHttpRequestBodyInit | null | undefined) => void = jest.fn();
    setRequestHeader: (header: string, value: string) => void = jest.fn();
    readyState: number = 4;
    status: number = 200;
    responseText: string = JSON.stringify({error: 0});
    upload = {
        onprogress: jest.fn()
    }
}
