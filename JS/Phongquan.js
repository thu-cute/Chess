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