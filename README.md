# toFixed

Sweet `Number.toFixed` Alternative 



# Usage



```
import { toFixed } from 'tofixed'
toFixed("3", 2) // Output "3"
```

Compare to `Number.tofixed`

```
Number(3).toFixed(2) // Output "3.00"
```



# Or Build your Own Formater

```
import { format, identity } from 'toFixed'

// `format` is a curried utility function

const toFixed = format(identity, '-')
const g2kg = format((v: NumberLike) => Number(v) / 1000, 0, 2)
const fen2yuan = format((v: NumberLike) => Number(v) / 100, 0, 2)
const yuan2fen = (v: NumberLike) => Number(v) * 100

```



# Other

```
import { isNumberLike } from 'toFixed'

// Check param can be converted to Finite Number
isNumberLike("2333") // Output true
```

