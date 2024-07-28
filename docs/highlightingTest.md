# Testiranje highlightinga

```baklava title="Test" showLineNumbers
funkcija faktorijel(br){
    var f = 1;
    dok(br > 1){
        f = f * br;
        br = br - 1;
        var test = "String";
    }
    vrati f;
}
//highlight-start
konst var br = broj(unos("Unesite neki broj: "));
//highlight-end
ispiši "Faktorijel tog broja je: ";
ispiši faktorijel(br);


za(var i = 0; i < 10; i = i + 1){

}


```

```javascript title="Test"
while (a == b) {
    a = b + 2;
}

for(var i = 0; i < 10; i++)
```
