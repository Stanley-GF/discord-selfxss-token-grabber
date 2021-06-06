function Login(token){

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);


    function FindModule(v){
      const z = typeof v === "string" ? v : null;
      for (const A in req.c) {
        if (req.c.hasOwnProperty(A)) {
            const C = req.c[A].exports;
            if (
              C &&
              C.__esModule &&
              C.default &&
              (z ? C.default[z] : v(C.default))
            )
              return C.default;
            if (C && (z ? C[z] : v(C))) return C;
            
        }
      }
      return null;

    }

FindModule("login").loginToken(token)

}

Login("your token");
