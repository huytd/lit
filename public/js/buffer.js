var BufferUtil = function() {
    return {
        from: function(str) {
            var buf = new ArrayBuffer(str.length*2);
            var bufView = new Uint8Array(buf);
            for (var i=0, strLen=str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        },
        toString: function(binary) {
            return String.fromCharCode.apply(null, new Uint8Array(binary));
        }
    }
}
