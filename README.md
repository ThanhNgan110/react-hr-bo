## Naming Convention
- camelCase: product, useDebounce, convertNumberToTime ...
- PascalCase: Product, ProductDetail, Login, Profile ...
- snake_case: first_name, last_name, username ...
- kebab-case: product-detail, product, first-name ...
- UPPERCASE: API_URL, USER_ROLE, PATH ...


# How to optimize performance react
- lazy load component -> it just load resource of page, not load resource
- code-splitting component -> just load resource when user action. Ex: when user input password field, it will load validate password library
- performance hook: prevent component re-render uneccessary - memo, useMemo, useCallback

# axios interceptor
- FE request api -> inject access token -> BE check access token -> no expiried -> system auto call api refresh token -> get new access token -> system auto call api before.

# Authorization RBAC (role-base access control)
- FE
  - pages
    - dashboard (admin, operator)
    - invoice (admin, operator)
    - member (admin, operator)
    - member detail (admin, operator, member)
  - action
    - create (admin, operator)
    - update (admin, operator)
    - delete (admin)
    - read (view) (admin, operator, member)

- BE
FE call api -> inject access token -> BE get role -> if yes -> allow call api (create, update, delete ...)