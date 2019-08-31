<!DOCTYPE HTML>
<html>
<head>
</head>
<body>

<?php
$firstname = $lastname = $email = $phone = $country = $state = $city = $zip_code = $gender = $comment = "";
/*
 * Validation will be done later this is the basic form
 */
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $country = $_POST["country"];
    $state = $_POST["state"];
    $city = $_POST["city"];
    $zip_code = $_POST["zip_code"];
    $comment = $_POST["comment"];
    $gender = $_POST["gender"];

    // Next is to store the values in the database
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "khawab";
    $db_table = "nairocare";
    // Create connection
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_table);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        // SQL to insert data into database
        //  we will deal with the errors later 
        //  and validations too
        $sql = "INSERT INTO volunteers (first_name,	last_name,	email,	phone,	country,	state,	city,	zip_code,	comment,	gender)
                                  VALUES ('$first_name',	'$last_name',	'$email',	'$phone',	'$country',	'$state',	'$city',	'$zip_code',	'$comment',	'$gender')";
        if (mysqli_query($conn, $sql)) {
            echo "<h1>Data saved</h1>";
            echo "<h2>Your Input:</h2>";
            echo $first_name . "<br>";
            echo $last_name . "<br>";
            echo $email . "<br>";
            echo $phone . "<br>";
            echo $country . "<br>";
            echo $state . "<br>";
            echo $city . "<br>";
            echo $zip_code . "<br>";
            echo $gender . "<br>";
            echo $comment . "<br>";

        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }

}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<h2>VOLUNTEER</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
  First Name: <input type="text" name="first_name"><br><br>
  Last Name: <input type="text" name="last_name"><br><br>
  E-mail: <input type="email" name="email"><br><br>
  Phone: <input type="text"  name="phone"><br><br>
  Country: <input type="text"  name="country"><br><br>
  State: <input type="text"  name="state"><br><br>
  City: <input type="text"  name="city"><br><br>
  Zip Code: <input type="text"  name="zip_code"><br><br>
  Comment: <textarea name="comment" rows="5" cols="40"></textarea><br><br>
  Gender:
  <input type="radio" name="gender" value="male">Male
  <input type="radio" name="gender" value="female">Female
  <input type="radio" name="gender" value="other">Other
  <br><br>
  <input type="submit" name="submit" value="Submit">
</form>
</body>
</html>
