<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>&lt;JM&gt; - I Voted!</title>

        <link rel="stylesheet" href="../css/styles.css">
    </head>
    <body>
        <?php
            echo "
            <div>
                <p>You voted for {$_POST}.</p>
            </div>
            ";
        ?>
    </body>
</html>