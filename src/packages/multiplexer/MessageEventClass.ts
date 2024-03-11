import { Event2 } from './Event';

export class MessageEvent2 extends Event2 implements MessageEvent {

    public readonly  AT_TARGET: 2 = 2;
    public readonly  BUBBLING_PHASE: 3 = 3;
    public readonly  CAPTURING_PHASE: 1 = 1;
    public NONE: 0 = 0;

    public readonly data: any;
    public readonly origin: string;
    public readonly lastEventId: string;
    public readonly source: any;
    public readonly ports: ReadonlyArray<any>;
    constructor(
        type: string,
        { data = null, origin = '', lastEventId = '', source = null, ports = [] }: MessageEventInit = {},
    ) {
        super(type);
        this.data = data;
        this.origin = `${origin}`;
        this.lastEventId = `${lastEventId}`;
        this.source = source;
        this.ports = [...ports];
    }

    initMessageEvent(): void {
        throw Error('Deprecated method');
    }
}

export const MessageEventClass = typeof MessageEvent !== 'undefined' ? MessageEvent : MessageEvent2;
