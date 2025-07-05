Получает данные магазинного чека по уи через api иицнс РБ
```
npm i https://github.com/momscoder/checkchecker
```
```javascript
import { getReceipt } from "checkchecker"

getReceipt('УНИКАЛЬНЫЙ ИД', 'yyyy-mm-dd')
    .then((data) => console.log(data.status));
```
