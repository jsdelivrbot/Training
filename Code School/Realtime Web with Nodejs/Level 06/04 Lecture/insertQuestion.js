<script src="/socket.io/socket.io.js"></script>
<script src="/insertQuestion.js"></script>

<script>
    var server = io.connect('http://localhost:8080');

    // Insert code here
    // 01
    server.on('question', function(data){
        // 02
        insertQuestion(data);
    });
</script>