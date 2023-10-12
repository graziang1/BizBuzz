<?php
$contents = file_get_contents("../files/test.txt");
$sentences = explode('.',$contents);

$keyword = 'sales';

foreach($sentences as $sentence) {

    if(false !== stripos($sentence,$keyword)){
        echo trim($sentence) . "\n";
        }
}
 ?>
