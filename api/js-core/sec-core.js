function e(t, y) {
    if (!t || !y) {
      throw new Error("Text and secret key are required.");
    }
  
    try {
      let xText = "";
      for (let i = 0; i < t.length; i++) {
        xText += String.fromCharCode(t.charCodeAt(i) ^ y.charCodeAt(i % y.length));
      }
  
      const encodedText = btoa(xText);
      return encodedText;
  
    } catch (error) {
      console.error("Encoding error:", error);
      return null;
    }
}

function d(t, y) {
    if (!t || !y) {
        throw new Error("Encoded text and secret key are required.");
    }

    try {
        const decoded = atob(t);

        let originalText = "";
        for (let i = 0; i < decoded.length; i++) {
            originalText += String.fromCharCode(decoded.charCodeAt(i) ^ y.charCodeAt(i % y.length));
        }

        return originalText;

    } catch (error) {
        console.error("Decoding error:", error);
        return null;
    }
}

function debug(t, k, f) {
    if(f == 1) {
    console.clear();
    console.log('Sec_Core Test:');
    console.log('Input: ' + t);
    console.log('code: ' + k);
    console.log('secure: ' + e(t, k));
    }
    else if(f == 0) {
        console.clear();
    console.log('Sec_Core Test:');
    console.log('Input: ' + t);
    console.log('code: ' + k);
    console.log('insecure: ' + d(t, k));
    }
}