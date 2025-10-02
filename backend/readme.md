🔑 Auth (/auth)

POST /otp – запросить одноразовый код (OTP) для входа по телефону/email.

POST /otp-verify – проверить введённый код.

POST /otp-finalize – завершить вход после верификации.

POST /oauth – вход через сторонний сервис (например, Google или Facebook).

POST /admin – авторизация/вход администратора.

POST /refresh – обновление access-токена через refresh-токен.

🛒 Basket (/basket)

POST /actions-basket – добавить/удалить продукт в корзине.

GET /product-basket – получить все товары в корзине пользователя.

GET /count – получить количество товаров в корзине.

📂 Categories (/categories)

GET /get-all – получить список всех категорий.

GET /get-top – получить топовые категории (например, популярные).

POST / – создать категорию (для админки).

GET /:id – получить категорию по ID.

PATCH /:id – обновить категорию.

DELETE /:id – удалить категорию.

⭐️ Favorites (/favorites)

POST /actions-favorite – добавить или убрать продукт/ресторан из избранного.

GET /get-all-favorites – получить список избранного пользователя.

🍔 Product (/products)

GET /get-product/:id – получить конкретный продукт по ID.

GET /get-products-restaurants-category/:id – получить продукты ресторана в определённой категории.

GET /get-products-restaurants/:id – получить все продукты ресторана.

⭐️ Ratings (/rating)

POST / – оставить отзыв/рейтинг.

GET / – получить список всех отзывов.

GET /:id – получить конкретный отзыв.

PATCH /:id – обновить отзыв (например, изменить текст/оценку).

DELETE /:id – удалить отзыв.

🏪 Restaurants (/restaurants)

GET /get-restaurants – список всех ресторанов.

GET /get-top-restaurants – топ ресторанов (по рейтингу/популярности).

GET /get-restaurant/:id – информация о ресторане.

POST / – создать ресторан (админка).

PATCH /:id – обновить ресторан.

DELETE /:id – удалить ресторан.

GET /search – поиск ресторанов по названию/фильтрам.

👤 Users (/users)

GET /get-user-info – получить профиль пользователя.

POST /update-user-profile – обновить профиль (имя, email и т. д.).

POST /update-user-phone – изменить номер телефона.

POST /create-user-address – добавить новый адрес доставки.

POST /update-user-address/:id – изменить адрес.

DELETE /delete-user-address/:id – удалить адрес.