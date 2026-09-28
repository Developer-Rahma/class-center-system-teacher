<?php
header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

// Your PHP code here
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/InternalStyles.css">
    <link rel="stylesheet" href="css/InternalStylesMedia.css">
    <title>Class Pill</title>
</head>

<body>
    <?php
    include 'includes/NavBar.php';
    include 'includes/Header.php';
    ?>
    <?php
    $section = $_GET['section'] ?? 'Home';
    echo $section;

    ?>
    <div class="pages">
        <div class="pages-container">
            <div class="bigpage-container">

                <?php
                if ($section == 'MyClasses') {

                    include 'includes/MyClasses.php';
                } else if ($section == 'MyClasses/SingleClass.php') {
                    include 'includes/MyClasses/SingleClass.php';
                } else if ($section == 'MyClasses/SingleClass/ManageStudent.php') {
                    include 'includes/MyClasses/SingleClass/ManageStudent.php';
                } else if ($section == 'MyClasses/SingleClass/ViewAll.php') {
                    include 'includes/MyClasses/SingleClass/ViewAll.php';
                } elseif ($section == 'ContactUs') {
                    include 'includes/ContactUs.php';
                } elseif ($section == 'MyGames') {
                    include 'includes/MyGames.php';
                } else if ($section == 'MyGames/SingleGame.php') {
                    include 'includes/MyGames/SingleGame.php';
                } else if ($section == 'MyGames/SingleGame/LeaderBoard.php') {
                    include 'includes/MyGames/SingleGame/LeaderBorad.php';
                } elseif ($section == 'MyRooms') {
                    include 'includes/MyRooms.php';
                } else if ($section == 'MyRooms/SingleRoom.php') {
                    include 'includes/MyRooms/SingleRoom.php';
                } elseif ($section == 'MyFolders') {
                    include 'includes/MyFolders.php';
                } elseif ($section == 'MyPools') {
                    include 'includes/MyPools.php';
                } elseif ($section == 'CreateNewClass') {
                    include 'includes/CreateMyClasses.php';
                } elseif ($section == 'Setting') {
                    include 'includes/Setting.php';
                } elseif ($section == "CreateNewPoll") {
                    include 'includes/CreateNewPoll.php';
                } elseif ($section == "intro-to-ai") {
                    include 'includes/IntroToAi.php';
                } else {
                    include 'includes/Home.php';
                }
                ?>
            </div>


        </div>
    </div>
    <script src="js/CreateNewPoll.js"></script>
    <script src="js/MyFolders.js"></script>
    <script src="js/SingleRoom.js"></script>
    <script src="js/Setting.js"></script>
    <script src="js/Header.js"></script>
    <script src="js/MyClasses.js"></script>
    <script src="js/CreateNewClass.js"></script>
    <script src="js/Home.js"></script>
    <script src="js/NavBar.js"></script>
</body>

</html>