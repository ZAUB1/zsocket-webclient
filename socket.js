class WebSocketClient {
	constructor(ip, port, cb)
	{
		this.ws = new WebSocket("ws://" + ip + ":" + toString(port));

		this.events = [];
		this.events["connected"] = [];
		this.events["disconnected"] = [];

		this.ws.onopen(() => {
			this.Event("connected");
		});

		this.ws.onclose(() => {
			this.Event("disconnected");
		});

		this.ws.onmessage((evt) => {
			try
			{
				const jdata = JSON.parse(evt.data);
				this.Event(jdata.n, jdata.obj);
			}
			catch
			{
				//
			}
		});

		if (cb)
			cb();
	}

	OnInternal(n, cb)
    {
        if (this.events[n])
        {
            this.events[n][this.events[n].length] = cb;
        }
        else
        {
            this.events[n] = [];
            this.events[n][this.events[n].length] = cb;
        }
    }

    Event(n, obj)
    {
        if (this.events[n])
        {
            for (let i = 0; i < this.events[n].length; i++)
                if (this.events[n][i])
                    this.events[n][i](obj);
                else
                    return;
        }
    }

    Emit(n, obj)
    {
    	this.ws.send(JSON.stringify({n: n, obj: obj}));
    }
}
