# ZSocket Web Client Module
Web client module for ZSockets (using WebSocket protocol)

## How to use
### Importing
```html
<script src="https://cdn.jsdelivr.net/gh/ZAUB1/zsockets-webclient@master/socket.js"></script>
```

### Example
```html
<head>
    <meta charset="UTF-8">

    <script src="https://cdn.jsdelivr.net/gh/ZAUB1/zsockets-webclient@master/socket.js"></script>

    <script>
        const WClient = new WebSocketClient("localhost", 8080);

        WClient.On("connected", () => {
            console.log("Connected to server");
        });

        WClient.On("test", () => {
            WClient.Emit("back", {int: 1, str: "abcd"});
        });
    </script>
</head>
```
