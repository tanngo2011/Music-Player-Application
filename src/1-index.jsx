//BÀI HỌC RÚT RA TỪ PROJECT NÀY


//- Thuộc tính offsetX của object event (về objetc event, xem phần demodnq trong frontend basic): dùng
//  để lấy ra vị trí của một Thành phần JSX theo trục Ox (trục ngang) mà ta đang thực hiện event
//- Thuộc tính target của object event dùng để truy cập đến Thành phần JSX mà ta đang thực hiện event.
//  Thuộc tính target này lại có một thuộc tính con là offsetWidth, dùng để truy cập đến Chiều rộng
//  width của Thành phần jsx mà ta đang thao tác.

//- Cách sử dụng thuộc tính BackgoundImage trong Thẻ JSX: 
//  https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
//  (xem Component Backgr)

//(?)- Thuộc tính z-index?????
//- Khái quát cách làm mờ background image mà không làm mờ content:
//      + Sử dụng 2 container riêng biệt, một container dùng để bọc background image, cái còn lại để
//        bọc content
//      + cho 2 container đến cùng vị trí, xếp container bọc content chồng lên container bọc background
//        image bằng thuộc tính z-index.
//  (cụ thể tham khảo link sau: https://stackoverflow.com/questions/20039765/how-to-apply-a-css-filter-to-a-background-image)

//(?)- Thuộc tính filter, blur??????

//- Tưởng tượng các Component là các quả cầu bọc nhau, quả cầu bọc ngoài là root, trong quả cầu root lần
//  lượt sẽ có các quả cầu lõi bọc nhau như vậy.
//  Bây giờ chẻ đôi quả cầu đó ra và nhìn theo lát cắt ngang, ta sẽ thấy các vân của các quả cầu xếp chồng
//  lên nhau thành các vòng tròn đồng tâm