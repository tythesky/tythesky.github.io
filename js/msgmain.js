function alert(main,detail){
  $("#msgMain").html(main)
  if(detail) $("#msgDetail").html(detail)
  else $("#msgDetail").html("")
  $("#modal-notification").show("normal");
}
init()
