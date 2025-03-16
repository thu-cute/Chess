function LuotDi(){
	var Temp = document.getElementById("iCoDen").src;
	document.getElementById("iCoDen").src = document.getElementById("iCoDo").src;
	document.getElementById("iCoDo").src = Temp;
}

function GetDiem(Name){
	switch(Name){
		case 'Xe':
			return 50;
		break;
		
		case 'Ma':
			return 50;
		break;
		
		case 'Tuong':
			return 50;
		break;
		
		case 'Hau':
			return 200;
		break;
		
		case 'Vua':
			return 300;
		break;
		
		case 'Tot':
			return 10;
		break;
		
		default:
			return 0;
		break;
	}
}

function DoiMau(X, Y){
	document.getElementById(X.toString() + Y.toString()).style.backgroundColor = "#F6CD61";
}

function GetColor(id){
	var rgb = document.getElementById(id).style.backgroundColor;
	var Temp = rgb.substring(rgb.indexOf('(') + 1, rgb.length - 1);
	while(Temp.indexOf(' ') != -1){
		Temp = Temp.replace(" ", "");
	}
	return Temp; //rgb
}

function GetName(id){
	try{
		var src = document.getElementById("i" + id).src;
		var Ten = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
		return Ten;
	}catch(err){
		return err;
	}
}

// Hàm kiểm tra xem quân tốt đã đến cuối bàn chưa
function isAtEndRow(id) {
    var row = id.substring(1, 2); // Lấy hàng của ô cờ
    if (GetColor(id).localeCompare(Mau.NuocDi) == 0) {
        if (row == '1' || row == '8') // Nếu quân tốt đã ở hàng 1 hoặc 8 (cuối bàn)
            return true;
    }
    return false;
}

// Hàm phong quân
function promotePiece(id) {
    var promotionPiece = prompt("Chọn quân để phong: (Hau, Xe, Ma, Tuong)"); // Hiển thị hộp thoại để người chơi chọn quân
    if (promotionPiece != null) {
        var pieceImage = getImagePath(promotionPiece); // Lấy đường dẫn ảnh của quân được chọn
        document.getElementById("i" + id).src = pieceImage; // Cập nhật ảnh cho ô cờ
    }
}

// Hàm lấy đường dẫn ảnh của quân được chọn
function getImagePath(piece) {
    switch (piece.toLowerCase()) {
        case 'Hau':
            return "QuanCo/Hau_Den.png"; // Đường dẫn ảnh cho quân Hậu
        case 'Xe':
            return "QuanCo/Xe_Den.png"; // Đường dẫn ảnh cho quân Xe
        case 'Ma':
            return "QuanCo/Ma_Den.png"; // Đường dẫn ảnh cho quân Mã
        case 'Tuong':
            return "QuanCo/Tuong_Den.png"; // Đường dẫn ảnh cho quân Tượng
        default:
            return CoDen.Rong; // Trả về ảnh rỗng nếu không tìm thấy đường dẫn
    }
}

// Hàm DiChuyen cũ (đã chỉnh sửa để thêm chức năng phong quân)
function DiChuyen(id, idMoi) {
    if (id.localeCompare(idMoi) == 0 || GetColor(idMoi).localeCompare(Mau.NuocDi) != 0)
        return false;
    document.getElementById("i" + idMoi).src = document.getElementById("i" + id).src;
    if (isAtEndRow(idMoi)) // Kiểm tra xem quân đã đến cuối bàn chưa
        promotePiece(idMoi); // Nếu đã đến cuối bàn, phong quân
    document.getElementById("i" + id).src = CoDen.Rong;
    return true;
}

function isChieuVua(Name){
	return Name.localeCompare("Vua") == 0 ? true : false;
}

function isCoDo(X, Y){
	var Temp = GetName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Do") == 0 ? true : false;
}

function isCoDen(X, Y){
	var Temp = GetName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Den") == 0 ? true : false;
}

function isRong(X, Y){
	var Temp = GetName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Rong") == 0 ? true : false;
}

function isBien(X, Y){
	if(X < 1 || X > 8)
		return true;
	else if(Y < 1 || Y > 8)
		return true;
	else
		return false;
}

function DiChuyen(id, idMoi){
	if(id.localeCompare(idMoi) == 0 ||  GetColor(idMoi).localeCompare(Mau.NuocDi) != 0)
		return false;
	document.getElementById("i" + idMoi).src = document.getElementById("i" + id).src;
	document.getElementById("i" + id).src = CoDen.Rong;
	return true;
}	