# Interpolate incorrect quotes test case

Execute `npm i && npm run build` and look at the two generated html files.

Expected result for both files (look at the quotes in the ld+json):

```html
<!DOCTYPE html>
<html>
    <head>
        <meta name="description" content="This page contains schema.org information">
        <script type="application/ld+json">
            {
                "name": "This is a \"cool\" webpage"
            }
        </script>
    </head>
    <body></body>
</html>
```

But the result for ?interpolate is:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta name="description" content="This page contains schema.org information">
        <script type="application/ld+json">
            {
                "name": "This is a "cool" webpage"
            }
        </script>
    </head>
    <body></body>
</html>
```