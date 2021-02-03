function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 hasil = str.match(value);
 console.log(hasil);
}

panggilRegexp(/c/gi)
panggilRegexp(/k/gi)
panggilRegexp(/l/gi)
