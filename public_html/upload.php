<?php // echo nl2br(print_r($_FILES,1));
//$target_dir = "upload/";
//$target_file = $target_dir . basename($_FILES["file"]["name"]);
//move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);
//echo json_encode($_FILES["file"]);

 try{   
    $cf = new CreateFolder();
    $cf->createDirectory($name,"Document");
    $target_dir = "/Transcripts/".$name."/Document/"; 
     $target_file = $target_dir . basename($_FILES["filepres"]["name"]);
   //  echo "Target File ".$target_file;
    move_uploaded_file($_FILES["filepres"]["tmp_name"], $target_file);
    }  catch(Exception $execpt) {
    echo '{"error11":{"text11":'. $execpt->getMessage() .'}}'; 
    echo $execpt->getLine();
}  
    $datetoChange = explode(".", $appointmentdate);
    $appDate = $datetoChange[2]."-".$datetoChange[1]."-".$datetoChange[0];
    $md->insertPrescriptionDiagnosisTranscriptsDetails($patientid,$_FILES["filepres"]["name"],$target_dir,"Document",$name,$appDate,$documentname);
?>
