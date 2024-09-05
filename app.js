function _0x2932(_0x10b323, _0x22c53d) {
    const _0x40b610 = _0x40b6();
    return (
        (_0x2932 = function (_0x293263, _0x42aa0a) {
            _0x293263 = _0x293263 - 0x6f;
            let _0x8df53d = _0x40b610[_0x293263];
            return _0x8df53d;
        }),
        _0x2932(_0x10b323, _0x22c53d)
    );
}
function _0x40b6() {
    const _0x419985 = [
        "classList",
        "180rFmoqN",
        "active",
        "toLocaleTimeString",
        "add",
        "3614576vaZrwl",
        "1052433FtCAxY",
        "DOMContentLoaded",
        "America/Los_Angeles",
        "getElementById",
        "135490kJqSRO",
        "395139iTyFxM",
        "10286202Avwqca",
        "textContent",
        "currentTime",
        "20RcVTSO",
        "body",
        "then",
        "26dGyDPu",
        "9175306oUSLBC",
        "7054074tQkqYY",
        "locationInfo",
        "introScreen",
        "json",
        "addEventListener",
        "click",
        "2-digit",
        "infoScreen",
    ];
    _0x40b6 = function () {
        return _0x419985;
    };
    return _0x40b6();
}
const _0xb8c1b4 = _0x2932;
(function (_0x2433f0, _0x195dc9) {
    const _0x1af9bf = _0x2932,
        _0x7a5945 = _0x2433f0();
    while (!![]) {
        try {
            const _0x34c250 =
                -parseInt(_0x1af9bf(0x8a)) / 0x1 +
                (-parseInt(_0x1af9bf(0x7a)) / 0x2) * (-parseInt(_0x1af9bf(0x73)) / 0x3) +
                (-parseInt(_0x1af9bf(0x85)) / 0x4) * (parseInt(_0x1af9bf(0x72)) / 0x5) +
                parseInt(_0x1af9bf(0x74)) / 0x6 +
                -parseInt(_0x1af9bf(0x7b)) / 0x7 +
                -parseInt(_0x1af9bf(0x89)) / 0x8 +
                (-parseInt(_0x1af9bf(0x7c)) / 0x9) * (-parseInt(_0x1af9bf(0x77)) / 0xa);
            if (_0x34c250 === _0x195dc9) break;
            else _0x7a5945["push"](_0x7a5945["shift"]());
        } catch (_0x332515) {
            _0x7a5945["push"](_0x7a5945["shift"]());
        }
    }
})(_0x40b6, 0xea529),
    document[_0xb8c1b4(0x80)](_0xb8c1b4(0x6f), () => {
        const _0x33c19c = _0xb8c1b4,
            _0x26c455 = document[_0x33c19c(0x71)](_0x33c19c(0x7e)),
            _0x5d50a1 = document[_0x33c19c(0x71)]("messageScreen"),
            _0x2d5a26 = document[_0x33c19c(0x71)](_0x33c19c(0x83)),
            _0x2c0c9f = document[_0x33c19c(0x71)](_0x33c19c(0x7d)),
            _0x3dc545 = document[_0x33c19c(0x71)](_0x33c19c(0x76));
        let _0x13f4ee = _0x26c455;
        const _0x54108b = () => {
                const _0x9cb870 = _0x33c19c,
                    _0x5c946d = new Date(),
                    _0x3595b5 = { timeZone: _0x9cb870(0x70), hour: _0x9cb870(0x82), minute: "2-digit", second: _0x9cb870(0x82) },
                    _0x4878aa = _0x5c946d[_0x9cb870(0x87)]([], _0x3595b5);
                _0x3dc545["textContent"] = _0x4878aa;
            },
            _0x1b0750 = () => {
                const _0x290d5b = _0x33c19c;
                fetch("https://ipapi.co/json/")
                    [_0x290d5b(0x79)]((_0x355a17) => _0x355a17[_0x290d5b(0x7f)]())
                    ["then"]((_0x557a18) => {
                        const _0x266950 = _0x290d5b;
                        _0x2c0c9f[_0x266950(0x75)] = _0x557a18["city"] + ",\x20" + _0x557a18["region"];
                    });
            },
            _0x1763bb = () => {
                if (_0x13f4ee === _0x26c455) _0x47f496(_0x26c455, _0x5d50a1);
                else _0x13f4ee === _0x5d50a1 && (_0x47f496(_0x5d50a1, _0x2d5a26), _0x1b0750());
            },
            _0x47f496 = (_0x4f1505, _0x41a584) => {
                const _0x53080c = _0x33c19c;
                _0x4f1505[_0x53080c(0x84)]["remove"](_0x53080c(0x86)), _0x41a584[_0x53080c(0x84)][_0x53080c(0x88)](_0x53080c(0x86)), (_0x13f4ee = _0x41a584);
            };
        _0x54108b(), setInterval(_0x54108b, 0x3e8), document[_0x33c19c(0x78)][_0x33c19c(0x80)](_0x33c19c(0x81), _0x1763bb);
    });
