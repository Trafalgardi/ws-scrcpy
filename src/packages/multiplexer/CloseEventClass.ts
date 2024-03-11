import { Event2 } from './Event';

export class CloseEvent2 extends Event2 implements CloseEvent {

    public readonly isTrusted: boolean = true;
    public readonly AT_TARGET: 2 = 2;
    public readonly BUBBLING_PHASE: 3 = 3;
    public readonly CAPTURING_PHASE: 1 = 1;
    public readonly NONE: 0 = 0;

    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
    constructor(type: string, { code, reason }: CloseEventInit = {}) {
        super(type);
        this.code = code || 0;
        this.reason = reason || '';
        this.wasClean = this.code === 0;
    }
}

export const CloseEventClass = typeof CloseEvent !== 'undefined' ? CloseEvent : CloseEvent2;
