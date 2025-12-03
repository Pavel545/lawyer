<?php
header("Access-Control-Allow-Origin: *");

// Вывод ошибок PHP
// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// error_reporting(E_ALL);

function debug($arr){
	echo '<div class="debug_block" style="position:fixed;right: 0px;bottom: 0px;font-size:12px;background:#000;color:#fff;font-weight:100;height: 100vh;width: 50%;overflow: auto;z-index: 40000;padding:20px"><pre>';
	print_r($arr);
	echo '</pre></div>';
	
}

//Подключение к базе данных GO
function ConnectDB(){
	// $mysqli = mysqli_connect('localhost', 'root', 'root', 'agatechnews') or die(mysqli_error($mysqli));
	$mysqli = mysqli_connect('localhost', 'agatech', 'rRpFR7xmmysdERPc', 'preview.agatech.ru') or die(mysqli_error($mysqli));
	$mysqli->set_charset("utf8");
	return $mysqli;
}



function CreateList($id=NULL){

	$connect = ConnectDB(); 
	if (!$id) {
		$bases = "SELECT * FROM gallery ORDER BY id DESC";
	}else{
		$bases = "SELECT * FROM gallery WHERE id=$id ORDER BY id DESC";
	}    
	
	if($infoDB = $connect->query($bases)){
		$mass= $infoDB->fetch_all(MYSQLI_ASSOC);
		$message = "<p>Удачное подключение</p>";
	}
	else{
		return $message = "<p>Не могу выбрать из таблицы ($bases) </p>";
	}

	foreach ($infoDB = $connect->query($bases) as $key) {
		$array['id']=$key['ID'];
		$array['name']=$key['TITLE'];
		$array['img']="./content/preview/".$key['ID'].".jpg";
		$array['translit'] = $key['TRANSLIT'];
		$info[]=$array;
	}
	return $info;
	mysqli_close($connect);
}



if (isset($_GET['id'])) {
	$count=0;
	$list = CreateList($_GET['id']);
	$dir = './content/makets/'.$list[0]['translit'];
	if (is_dir($dir)) {
		if ($dh = opendir($dir)) {
			while (($file = readdir($dh)) !== false) {
				if ($file !="." and $file !=".." ) {
					$fileList[]= '/'.$dir.'/'.$file;
				}
			}
			closedir($dh);
		}
	}
	$list[0]['media']=$fileList;
	$data = json_encode($list);
}else{
	$data = json_encode(CreateList());
}

echo $data;