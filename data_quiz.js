// 30 Câu hỏi Trắc nghiệm Multi-Select (Chọn nhiều đáp án)
// Bám sát Giáo trình Lập trình Script (Chương 1-6) - Tác giả: Nguyễn Duy Nhật Viễn, ĐHBK Đà Nẵng
const QUIZ_DATA = [
  // --- CHƯƠNG 1 (CÂU 1 - 5) ---
  {
    id: 1,
    chapter: 1,
    chapterTitle: "Chương 1: Tổng quan tự động hóa thiết kế vi mạch",
    question: "Các công đoạn nào sau đây thuộc về pha Frontend (thiết kế chức năng) trong quy trình thiết kế vi mạch (IC Design Flow)?",
    badge: "Chọn 3 đáp án đúng",
    options: [
      "A. RTL Design (Mô tả phần cứng bằng Verilog/SystemVerilog/VHDL)",
      "B. Functional Verification (Mô phỏng kiểm tra chức năng hệ thống)",
      "C. Logic Synthesis (Tổng hợp mã RTL thành netlist cổng logic chuẩn)",
      "D. Clock Tree Synthesis (CTS - Xây dựng cây phân phối xung nhịp)",
      "E. Floorplanning & Placement (Quy hoạch mặt bằng và định vị cell vật lý)"
    ],
    correct: [0, 1, 2],
    explanation: "Theo Slide 5, IC Design Flow chia làm 2 giai đoạn rõ rệt:\n- Frontend gồm: RTL Design, Functional Verification, và Synthesis.\n- Backend (Physical Design) gồm: Floorplanning & Placement, Clock Tree Synthesis (CTS), và Routing & Signoff. Do đó các phương án A, B, C thuộc Frontend; D và E thuộc Backend.",
    theoryRef: "Chương 1 - Mục 1: Quy trình thiết kế vi mạch (Frontend vs Backend)"
  },
  {
    id: 2,
    chapter: 1,
    chapterTitle: "Chương 1: Tổng quan tự động hóa thiết kế vi mạch",
    question: "Những hạn chế chí mạng nào của giao diện đồ họa (GUI) trong môi trường thiết kế vi mạch công nghiệp đòi hỏi kỹ sư phải chuyển sang tư duy Script-First?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Không tái tạo được (Non-reproducible) chính xác chuỗi thao tác bấm nút phức tạp",
      "B. Không thể mở rộng (Scalability) khi số lượng bài test lên tới hàng nghìn hoặc tổng hợp hàng chục module",
      "C. Không thể tích hợp tự động vào hệ thống kiểm thử liên tục CI/CD và chạy theo lịch trình (cron/batch)",
      "D. Dễ phát sinh sai sót của con người khi phải lặp đi lặp lại thao tác thủ công",
      "E. Giao diện GUI hoàn toàn không thể hiển thị được dạng sóng tín hiệu xung nhịp (waveform)"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 6, các nhược điểm của GUI là: Không tái tạo được, Không mở rộng được (1000 test cases?), Không tích hợp CI/CD, Khó chia sẻ và cộng tác, Dễ sai sót khi lặp lại (Ví dụ: tổng hợp 50 module bằng GUI mất 250 phút, trong khi viết script mất 30 phút và chạy chỉ 10 phút). Phương án E sai vì GUI vẫn rất hữu ích khi quan sát waveform tương tác trong giai đoạn debug ban đầu.",
    theoryRef: "Chương 1 - Mục 2: Hạn chế của GUI & Lợi ích của Scripting"
  },
  {
    id: 3,
    chapter: 1,
    chapterTitle: "Chương 1: Tổng quan tự động hóa thiết kế vi mạch",
    question: "Phát biểu nào sau đây là ĐÚNG về kiểm thử hồi quy (Regression Testing) trong thiết kế vi mạch?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Là việc chạy lại tập hợp lớn các bài kiểm tra sau khi có thay đổi trong thiết kế RTL hoặc công cụ EDA",
      "B. Giúp phát hiện lỗi sớm (fail-fast) và đảm bảo chất lượng thiết kế sau mỗi lần commit mã nguồn",
      "C. Đóng vai trò là xương sống trong quy trình đảm bảo chất lượng (QA) của ngành bán dẫn",
      "D. Tập hợp các test cases đóng vai trò như tài liệu sống (living documentation) của chip",
      "E. Trong các dự án thực tế, regression chỉ cần chạy thủ công một lần duy nhất trước khi tape-out"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 8 và 11, Regression Testing là việc chạy lại tập hợp test sau khi thay đổi thiết kế hoặc công cụ; giúp phát hiện lỗi sớm, đảm bảo chất lượng sau mỗi commit, tăng tốc refactor và test cases là tài liệu sống. Trong thực tế công nghiệp, hệ thống cluster máy chủ chạy tự động hơn 100.000 test cases mỗi ngày, chứ không thể chạy thủ công một lần như phương án E nêu.",
    theoryRef: "Chương 1 - Mục 3: Regression Testing"
  },
  {
    id: 4,
    chapter: 1,
    chapterTitle: "Chương 1: Tổng quan tự động hóa thiết kế vi mạch",
    question: "Khi so sánh vai trò của các ngôn ngữ scripting theo giáo trình, những nhận định nào sau đây là chính xác?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Bash đóng vai trò là 'Glue language' kết nối các công cụ, quản lý tệp tin và chạy tự động hóa trên Linux",
      "B. Tcl là ngôn ngữ native chuẩn công nghiệp được tích hợp trực tiếp trong hầu hết các công cụ EDA hàng đầu",
      "C. Python có ưu thế vượt trội về thư viện phong phú, xử lý dữ liệu và AI/ML với xu hướng phát triển mạnh mẽ",
      "D. 'Bộ ba quyền lực' không thể thiếu đối với kỹ sư vi mạch chuyên nghiệp là Bash + Tcl + Python",
      "E. Perl hiện là ngôn ngữ chính thay thế toàn bộ Tcl trong các công cụ tổng hợp của Synopsys và Cadence"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo bảng so sánh Slide 9: Bash là Glue (nền tảng Linux), Tcl là EDA native (chuẩn EDA không thể thay thế), Python mạnh về Data/Libraries (xu hướng tăng mạnh), Perl mạnh về Regex text nhưng xu hướng đang giảm dần. Bộ ba quyền lực là Bash + Tcl + Python. Nhận định E hoàn toàn sai.",
    theoryRef: "Chương 1 - Mục 4: So sánh ngôn ngữ scripting & Bộ ba quyền lực"
  },
  {
    id: 5,
    chapter: 1,
    chapterTitle: "Chương 1: Tổng quan tự động hóa thiết kế vi mạch",
    question: "Tư duy 'Script-First' và môi trường phát triển trên Linux đề xuất những nguyên tắc và thói quen cốt lõi nào?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Quy tắc vàng: Bất cứ thao tác nào phải làm lại nhiều hơn 2 lần thì lập tức viết script",
      "B. Chuyển đổi tư duy từ 'Click menu nào?' sang 'Lệnh nào thực hiện? Làm sao đưa vào script?'",
      "C. GUI phù hợp cho học tập khảo sát, nhưng Script-First là kỹ năng bắt buộc cho môi trường sản xuất công nghiệp",
      "D. Tận dụng triết lý Unix: 'Everything is a file' kết hợp với pipes (|) và redirection (>, <)",
      "E. Tuyệt đối không sử dụng Git hoặc hệ thống kiểm soát phiên bản đối với các kịch bản script EDA"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 4, 7, 10, 11: Quy tắc vàng là làm việc nhiều hơn 2 lần → viết script. Tư duy Script-First tập trung vào lệnh dòng lệnh và tự động hóa. Triết lý Unix xem mọi thứ là file. Các kịch bản script bắt buộc phải được quản lý bằng Git (công cụ thiết yếu cùng Linux và Editor). Vì vậy phương án E là sai.",
    theoryRef: "Chương 1 - Mục 5: Tư duy Script-First và Môi trường Linux"
  },

  // --- CHƯƠNG 2 (CÂU 6 - 10) ---
  {
    id: 6,
    chapter: 2,
    chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
    question: "Cấu trúc thư mục dự án chuẩn (Standard Project Structure) của một dự án IC Design trên Linux thường gồm những thư mục nào?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. rtl/ - Chứa mã nguồn mô tả phần cứng thiết kế",
      "B. tb/ - Chứa mã nguồn các khối testbench kiểm tra",
      "C. sim/ - Thư mục chạy mô phỏng và lưu kết quả/log",
      "D. synth/ - Thư mục thực thi kịch bản tổng hợp logic",
      "E. reports/ - Chứa các file báo cáo timing, area, power sau khi chạy công cụ"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 16 và 22, cấu trúc thư mục project chuẩn cho kỹ sư vi mạch bao gồm: rtl/ (mã nguồn), tb/ (testbench), sim/ (mô phỏng), synth/ (tổng hợp), reports/ (báo cáo), scripts/ (kịch bản) và Makefile. Tất cả 5 phương án đều chính xác.",
    theoryRef: "Chương 2 - Mục 1: Cấu trúc thư mục Linux & IC Project"
  },
  {
    id: 7,
    chapter: 2,
    chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
    question: "Về phân quyền tệp (Permissions) trong Linux bằng lệnh chmod, những câu lệnh nào sau đây cấp quyền thực thi (execution) cho file script?",
    badge: "Chọn 3 đáp án đúng",
    options: [
      "A. chmod 755 script.sh",
      "B. chmod u+x script.sh",
      "C. chmod +x script.sh",
      "D. chmod 644 script.sh",
      "E. chmod 444 script.sh"
    ],
    correct: [0, 1, 2],
    explanation: "Theo Slide 18 và 23: Quyền thực thi ký hiệu là 'x' (trọng số 1). 755 tương ứng với rwxr-xr-x (Owner có quyền x, group và others có quyền x). chmod u+x thêm quyền x cho user. chmod +x thêm quyền x cho mọi đối tượng. Còn 644 (rw-r--r--) và 444 (r--r--r--) không hề có quyền x thực thi.",
    theoryRef: "Chương 2 - Mục 2: Phân quyền tệp với chmod"
  },
  {
    id: 8,
    chapter: 2,
    chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
    question: "Khi làm việc với chuyển hướng I/O (Redirection) và Pipes trong Bash, những câu lệnh nào sau đây đúng cú pháp và ý nghĩa sử dụng trong IC Design?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. dc_shell -f run.tcl > log.txt 2>&1  (Chuyển hướng cả stdout và stderr vào log.txt)",
      "B. find . -name \"*.v\" | wc -l  (Đếm tổng số file Verilog trong cây thư mục dự án)",
      "C. grep VIOLATION *.rpt | head -10  (Lọc ra 10 dòng đầu tiên có chứa chuỗi VIOLATION)",
      "D. tail -f simulation.log  (Theo dõi nội dung mới ghi vào log mô phỏng theo thời gian thực)",
      "E. grep -r -i \"error\" < log.txt > wc -l  (Cú pháp ghép lệnh hợp lệ để đếm lỗi)"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 19: Các ví dụ kinh điển được trình bày là: `dc_shell -f run.tcl > log.txt 2>&1`, `find . -name \"*.v\" | wc -l`, `grep VIOLATION *.rpt | head -10`, và `tail -f simulation.log`. Phương án E sai cú pháp vì không thể dùng redirection `> wc -l` (phải dùng pipe `| wc -l`).",
    theoryRef: "Chương 2 - Mục 3: Pipes và Chuyển hướng I/O"
  },
  {
    id: 9,
    chapter: 2,
    chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
    question: "Trong lập trình kịch bản Bash cho thiết kế vi mạch, những thực hành và cú pháp nào sau đây là CHUẨN XÁC?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Đặt dòng Shebang '#!/bin/bash' ở dòng đầu tiên của file kịch bản",
      "B. Thiết lập 'set -euo pipefail' ở đầu script production để dừng ngay khi có lỗi hoặc biến chưa định nghĩa",
      "C. Cấu trúc kiểm tra slack âm: if [ $SLACK -lt 0 ]; then echo \"Timing violation\"; exit 1; fi",
      "D. Vòng lặp đọc từng dòng an toàn: while IFS= read -r line; do echo \"$line\"; done < log.txt",
      "E. Trong Bash, khi gán biến bắt buộc phải có khoảng trắng hai bên dấu bằng: PROJECT = \"alpha\""
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 20, 21, 23: Dùng Shebang `#!/bin/bash`, `set -euo pipefail` cho production, kiểm tra số nguyên dùng toán tử so sánh `-lt`, đọc file dùng `while IFS= read -r line`. Phương án E sai vì cú pháp gán biến trong Bash TUYỆT ĐỐI KHÔNG ĐƯỢC có khoảng trắng xung quanh dấu '=', cú pháp đúng là `PROJECT=\"alpha\"`.",
    theoryRef: "Chương 2 - Mục 4: Lập trình Bash Scripting cho IC Design"
  },
  {
    id: 10,
    chapter: 2,
    chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
    question: "Các công cụ dòng lệnh xử lý văn bản (Text Processing) trong Linux đóng vai trò gì trong việc phân tích kết quả thiết kế chip?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. grep: Tìm kiếm chuỗi mẫu, thông báo lỗi hoặc vi phạm (-r đệ quy, -i không phân biệt hoa thường)",
      "B. sed: Tìm kiếm và thay thế chuỗi tự động theo luồng dòng lệnh với cú pháp 's/old/new/g'",
      "C. awk: Công cụ trích xuất và in dữ liệu theo từng cột được định dạng trong bảng báo cáo",
      "D. find: Tìm kiếm vị trí các tập tin trong hệ thống theo tên, đuôi mở rộng hoặc thời gian tạo",
      "E. cd: Dùng để trích xuất số lượng cell và tính tổng diện tích chip từ file log tổng hợp"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 19, 23: Các công cụ text processing gồm: grep (tìm kiếm), sed (thay thế chuỗi), awk (in cột/xử lý bảng), find (tìm file), head, tail, wc. Lệnh `cd` chỉ dùng để thay đổi thư mục hiện hành (change directory), hoàn toàn không thể parse dữ liệu log như mô tả ở phương án E.",
    theoryRef: "Chương 2 - Mục 3: Text Processing"
  },

  // --- CHƯƠNG 3 (CÂU 11 - 15) ---
  {
    id: 11,
    chapter: 3,
    chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
    question: "Về bản chất hoạt động của bộ thông dịch Tcl (Tcl Interpreter), những phát biểu nào sau đây là ĐÚNG?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Mọi cấu trúc trong Tcl bản chất đều là câu lệnh (Command) kể cả định nghĩa hàm và điều khiển luồng",
      "B. Mọi kiểu dữ liệu trong Tcl (từ số, list, code block) về bản chất đều có biểu diễn dưới dạng chuỗi (String)",
      "C. Các câu lệnh được phân tách bằng ký tự xuống dòng (newline) hoặc dấu chấm phẩy (;)",
      "D. Dấu chú thích '#' phải đứng ở đầu lệnh; nếu muốn viết comment cùng dòng với lệnh phải có tiền tố ';#'",
      "E. Tcl yêu cầu người lập trình phải khai báo kiểu dữ liệu tĩnh (như int, float) cho biến trước khi gán"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 26, 27, 31: Triết lý Tcl: 'mọi thứ là command', 'mọi thứ là string', lệnh tách bởi newline hoặc ';', arguments tách bởi khoảng trắng, comment `#` phải ở đầu command (inline: `;#`). Biến KHÔNG cần khai báo kiểu (Slide 31: 'Ghi nhớ: Biến không cần khai báo kiểu'). Phương án E sai.",
    theoryRef: "Chương 3 - Mục 1: Tcl Interpreter & Triết lý ngôn ngữ"
  },
  {
    id: 12,
    chapter: 3,
    chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
    question: "Tcl Interpreter hỗ trợ 3 cơ chế thay thế (Substitution) nào sau đây?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Thay thế biến (Variable substitution) sử dụng ký tự '$', ví dụ: $variable",
      "B. Thay thế lệnh (Command substitution) sử dụng cặp ngoặc vuông '[]', ví dụ: [expr 2+3]",
      "C. Thay thế ký tự đặc biệt (Backslash substitution) sử dụng '\\', ví dụ: \\n, \\t",
      "D. Các cơ chế thay thế có thể lồng ghép vào nhau: set files [glob *.v]; puts \"Found [llength $files] files\"",
      "E. Thay thế con trỏ bộ nhớ (Pointer dereference) thông qua toán tử '*' như ngôn ngữ C/C++"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 26, 28: Tcl hỗ trợ đúng 3 loại substitution: Biến `$`, Command `[]`, Backslash `\\`, và cho phép lồng nhau tự nhiên. Tcl là ngôn ngữ kịch bản bậc cao hướng chuỗi, không có cơ chế quản lý con trỏ bộ nhớ `*` như ngôn ngữ C. Do đó E là sai.",
    theoryRef: "Chương 3 - Mục 2: Ba loại thay thế trong Tcl"
  },
  {
    id: 13,
    chapter: 3,
    chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
    question: "Sự khác biệt cốt lõi giữa dấu ngoặc kép (\" \") và dấu ngoặc nhọn ({ }) trong Tcl dẫn đến những kết luận nào?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Dấu ngoặc kép \" \" cho phép thực hiện việc thay thế biến ($) và thay thế lệnh ([]) bên trong chuỗi",
      "B. Dấu ngoặc nhọn { } giữ nguyên văn bản (literal/raw), vô hiệu hóa mọi cơ chế thay thế",
      "C. Câu lệnh EDA: create_clock -period $clock_period [get_ports clk] là ĐÚNG vì biến được giải phóng giá trị",
      "D. Câu lệnh EDA: create_clock -period {$clock_period} [get_ports clk] là SAI vì giá trị chuỗi '$clock_period' không được mở rộng",
      "E. Lỗi sai phân biệt giữa \" \" và { } là một lỗi hiếm khi xảy ra và không gây ảnh hưởng gì tới script EDA"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 29, 30, 43: Double quotes có substitution, Braces giữ nguyên văn. Slide 30 đưa ra ví dụ EDA đúng/sai cụ thể: `create_clock -period $clock_period` là Đúng, `{$clock_period}` là Sai. Slide 43 nhấn mạnh 'Điểm then chốt: Sai quoting (\"\" vs {}) là nguồn bug phổ biến nhất trong Tcl EDA'. Do đó nhận định E hoàn toàn sai.",
    theoryRef: "Chương 3 - Mục 3: Quotes so với Braces"
  },
  {
    id: 14,
    chapter: 3,
    chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
    question: "Về tính toán số học với lệnh expr trong Tcl, những phát biểu nào sau đây là CHUẨN XÁC theo Best Practice?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Luôn luôn bọc biểu thức trong dấu ngoặc nhọn: expr {$a + $b}",
      "B. Bọc dấu ngoặc nhọn trong expr giúp tránh hiện tượng thay thế 2 lần (double substitution)",
      "C. Bọc dấu ngoặc nhọn giúp bộ thông dịch Tcl tối ưu hóa biên dịch bytecode và thực thi nhanh hơn",
      "D. Hỗ trợ các toán tử logic và số học phong phú như: +, -, *, /, %, **, ==, !=, <, >, &&, ||, !",
      "E. Lệnh expr không hỗ trợ số thực (floating point) nên không thể tính chu kỳ xung nhịp theo nano-giây"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 32 và 33: 'Best practice: Luôn viết expr {$a + $b} — tránh double substitution, nhanh hơn.' Toán tử hỗ trợ đầy đủ số học và logic. expr hỗ trợ tính toán số thực rất tốt (Ví dụ Slide 32: `set period_ns [expr {1000.0 / $freq_mhz}]`). Phương án E sai.",
    theoryRef: "Chương 3 - Mục 4: Toán học với expr & Best Practice"
  },
  {
    id: 15,
    chapter: 3,
    chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
    question: "Những câu lệnh và thao tác nào sau đây trên Lists và Mảng (Arrays) trong Tcl là CHÍNH XÁC?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. lindex $list 0 truy xuất phần tử đầu tiên, và lindex $list end truy xuất phần tử cuối cùng",
      "B. lappend list_name item thêm một phần tử vào cuối danh sách hiện có",
      "C. lsearch $list target trả về chỉ số của phần tử nếu tìm thấy, hoặc trả về -1 nếu không có",
      "D. Mảng trong Tcl là mảng kết hợp (Associative Array) lưu theo cặp key-value dạng chuỗi",
      "E. Có thể giả lập mảng nhiều chiều trong Tcl bằng cách đặt tên key có dấu phẩy: set matrix(1,0) 3"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 34, 35, 36, 37, 38: Các hàm lindex, lappend, lsearch (-1 nếu không tìm thấy) đều chính xác. Slide 37 ghi rõ 'Tcl array là associative array (không phải mảng chỉ số liên tục như C)'. Slide 38 chỉ ra cách giả lập mảng nhiều chiều bằng key pattern như `set matrix(0,0) 1`. Cả 5 phương án đều đúng.",
    theoryRef: "Chương 3 - Mục 5: Danh sách và Mảng kết hợp"
  },

  // --- CHƯƠNG 4 (CÂU 16 - 20) ---
  {
    id: 16,
    chapter: 4,
    chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
    question: "Khi sử dụng cấu trúc rẽ nhánh if / elseif / else trong Tcl, những nguyên tắc cú pháp nào là BẮT BUỘC?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Cả điều kiện kiểm tra và thân khối lệnh thực thi đều phải được bọc trong cặp ngoặc nhọn {}",
      "B. Ký tự mở ngoặc nhọn '{' phải nằm trên cùng dòng với câu lệnh if, elseif hoặc else",
      "C. Từ khóa phân nhánh phụ bắt buộc phải viết liền là 'elseif' (không có khoảng trắng)",
      "D. Các toán tử so sánh điều kiện có thể là: ==, !=, <, >, <=, >=, &&, ||, !",
      "E. Được phép viết tách rời thành 'else if' và đặt dấu '{' xuống dòng tự do mà không cần dấu gạch chéo"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 46, 47, 62: 'Bắt buộc: Điều kiện và body đều dùng braces. Toán tử: == != < > <= >= && || !'. Từ khóa là `elseif`. Dấu `{` phải nằm cùng dòng vì Tcl là ngôn ngữ phân tách lệnh theo dòng mới (newline). Viết tách 'else if' hoặc xuống dòng tự do không có dấu `\\` sẽ gây lỗi cú pháp nghiêm trọng. Phương án E sai.",
    theoryRef: "Chương 4 - Mục 1: Cấu trúc rẽ nhánh if / elseif / else"
  },
  {
    id: 17,
    chapter: 4,
    chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
    question: "Câu lệnh switch trong Tcl hỗ trợ những tùy chọn và kỹ thuật phân nhánh theo pattern nào sau đây?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. Tùy chọn mặc định khi không khai báo cờ so sánh là -exact (so khớp chính xác chuỗi)",
      "B. Tùy chọn -glob cho phép so khớp theo mẫu ký tự đại diện wildcard (*, ?)",
      "C. Tùy chọn -regexp cho phép so khớp theo biểu thức chính quy",
      "D. Tùy chọn -nocase cho phép so khớp mà không phân biệt chữ hoa và chữ thường",
      "E. Cho phép gộp nhiều pattern dùng chung một hành động bằng dấu gạch ngang '-' (ví dụ: \"*.v\" - \"*.sv\" { puts \"HDL\" })"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 49 và 50: switch có các options `-exact` (mặc định), `-glob`, `-regexp`, `-nocase`. Slide 50 minh họa kỹ thuật gộp nhiều pattern cùng 1 action bằng dấu `-`: `\"*.v\" - \"*.sv\" - \"*.vh\" { puts \"HDL source\" }`. Tất cả 5 phương án đều chính xác.",
    theoryRef: "Chương 4 - Mục 2: Phân nhánh theo pattern với switch"
  },
  {
    id: 18,
    chapter: 4,
    chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
    question: "Về các vòng lặp trong Tcl (foreach, for, while, break, continue), những phát biểu nào sau đây là ĐÚNG?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. foreach là vòng lặp quan trọng nhất trong EDA, tối ưu khi duyệt các danh sách cells, nets, pins, files",
      "B. foreach hỗ trợ duyệt đồng thời từng cặp name-value: foreach {name value} [list a 1 b 2] { ... }",
      "C. foreach có thể duyệt qua toàn bộ mảng kết hợp bằng cú pháp: foreach key [array names arr] { ... }",
      "D. Lệnh break dùng để thoát sớm khỏi vòng lặp, còn continue dùng để bỏ qua lần lặp hiện tại",
      "E. Vòng lặp foreach trong Tcl chỉ hỗ trợ duyệt các số nguyên và không thể duyệt qua danh sách chuỗi"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 46, 51, 52, 53: 'foreach: vòng lặp quan trọng nhất... EDA tip: Ưu tiên foreach khi duyệt cells, nets, pins, files'. foreach duyệt danh sách chuỗi, duyệt cặp name-value, duyệt mảng. break/continue hoạt động chuẩn mực. Phương án E hoàn toàn sai vì mọi thứ trong Tcl là chuỗi và foreach duyệt chuỗi cực kỳ mạnh mẽ.",
    theoryRef: "Chương 4 - Mục 3: Vòng lặp foreach, for, while"
  },
  {
    id: 19,
    chapter: 4,
    chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
    question: "Trong Tcl, việc định nghĩa thủ tục (proc) và quản lý phạm vi biến (scope) tuân theo những quy tắc nào?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Cú pháp định nghĩa thủ tục là: proc tên_hàm {danh_sách_tham_số} {thân_hàm}",
      "B. Cho phép thiết lập giá trị mặc định cho tham số bằng cú pháp: {tên_tham_số giá_trị_mặc_định}",
      "C. Mặc định biến trong proc là local; muốn truy cập biến toàn cục phải khai báo từ khóa 'global'",
      "D. Lệnh upvar cho phép truyền tham chiếu để sửa trực tiếp biến của hàm gọi bên ngoài",
      "E. Khi sử dụng lệnh upvar, đối số truyền vào bắt buộc phải có dấu '$' trước tên biến (ví dụ: upvar $count ref)"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 55, 56, 57: Cú pháp `proc ten {args} {body}`, tham số mặc định `{design {clock_period 10}}`, biến toàn cục dùng `global`. Lệnh `upvar $var_name local_ref` truyền tham chiếu. Tuy nhiên, Slide 57 ghi rõ cảnh báo: 'Lưu ý upvar: Truyền tên biến (count), không phải $count'. Do đó nhận định E là sai.",
    theoryRef: "Chương 4 - Mục 4: Thủ tục (proc) và Phạm vi biến"
  },
  {
    id: 20,
    chapter: 4,
    chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
    question: "Cơ chế bắt lỗi ngoại lệ catch trong Tcl hoạt động như thế nào và có ý nghĩa gì trong kịch bản EDA?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Giúp bắt lỗi runtime, ngăn ngừa kịch bản tự động hóa dừng đột ngột và cung cấp phương án fallback",
      "B. Lệnh 'catch {command} var_result' trả về 0 nếu câu lệnh được thực thi thành công",
      "C. Nếu có lỗi phát sinh, catch trả về giá trị khác 0 (thường là 1) và thông điệp lỗi được lưu trong var_result",
      "D. Thường được sử dụng để bọc các thao tác gọi công cụ bên ngoài (exec dc_shell) hoặc mở file (open)",
      "E. Lệnh catch sẽ tự động sửa chữa mã nguồn RTL bị lỗi cú pháp trước khi chạy tổng hợp"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 58 và 62: Mục đích của `catch`: 'Bắt lỗi runtime, tránh script dừng đột ngột, có phương án fallback'. Trả về 0 nếu pass, khác 0 nếu fail và ghi message lỗi vào biến kết quả. Best practice: Bọc I/O và exec trong catch. Lệnh catch không thể tự động sửa mã nguồn RTL như phương án E bịa đặt.",
    theoryRef: "Chương 4 - Mục 5: Bắt lỗi với catch"
  },

  // --- CHƯƠNG 5 (CÂU 21 - 25) ---
  {
    id: 21,
    chapter: 5,
    chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
    question: "Các hàm xử lý chuỗi (string) nào sau đây trong Tcl trả về kết quả đúng như mô tả?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. [string length \"Hello World\"] trả về giá trị độ dài chuỗi là 11",
      "B. [string index \"Hello\" 0] trả về ký tự đầu 'H', và [string index \"Hello\" end] trả về ký tự cuối 'o'",
      "C. [string range \"Hello\" 0 4] trả về chuỗi con \"Hello\"",
      "D. [string first \"fox\" $s] trả về vị trí xuất hiện đầu tiên của chuỗi con tìm kiếm",
      "E. [string match -nocase \"*FOX*\" $s] kiểm tra xem chuỗi có khớp mẫu hay không mà không phân biệt hoa thường"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 66, 67, 79: `string length` tính độ dài (11), `string index` lấy ký tự (index 0 đến end), `string range` lấy chuỗi con, `string first` tìm vị trí xuất hiện đầu tiên, `string match -nocase` so khớp không phân biệt hoa thường. Cả 5 phương án đều chuẩn xác.",
    theoryRef: "Chương 5 - Mục 1: Thao tác Chuỗi (String)"
  },
  {
    id: 22,
    chapter: 5,
    chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
    question: "Về hai câu lệnh format và scan trong Tcl, những nhận định nào sau đây là CHÍNH XÁC?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Lệnh format dùng để định dạng chuỗi xuất dữ liệu, căn lề cột báo cáo tương tự hàm printf trong ngôn ngữ C",
      "B. Hỗ trợ các đặc tả định dạng quen thuộc như: %-10s (chuỗi căn lề trái), %3d (số nguyên), %.2f (số thực), %e (dạng khoa học)",
      "C. Lệnh scan dùng để phân tích chuỗi văn bản theo định dạng mẫu và trích xuất các giá trị tương ứng vào biến",
      "D. Câu lệnh scan $data \"temp=%f, voltage=%f\" t v trả về số lượng trường dữ liệu được gán thành công (là 2)",
      "E. Lệnh format dùng để định dạng lại phân vùng ổ đĩa cứng Linux trước khi chạy tổng hợp mạch"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 69 và 79: format định dạng báo cáo timing/area, scan parse dòng log có cấu trúc. Scan trả về số lượng biến quét thành công. Phương án E là sai vì format trong Tcl là hàm chuỗi (string formatting), không phải lệnh định dạng ổ đĩa hệ điều hành.",
    theoryRef: "Chương 5 - Mục 2: format và scan"
  },
  {
    id: 23,
    chapter: 5,
    chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
    question: "Khi sử dụng biểu thức chính quy (Regular Expressions) với lệnh regexp trong Tcl, những ký hiệu pattern và cú pháp nào là ĐÚNG?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. \\d khớp với chữ số 0-9, \\w khớp với ký tự từ (a-z, A-Z, 0-9, _), và \\s khớp với khoảng trắng",
      "B. Dấu chấm '.' khớp với bất kỳ ký tự nào; dấu '+' khớp 1 hoặc nhiều lần lặp; dấu '*' khớp 0 hoặc nhiều lần lặp",
      "C. Dấu ngoặc đơn (...) tạo capture group để bóc tách dữ liệu con trực tiếp vào các biến",
      "D. Cú pháp regexp {slack.*?([-0-9.]+)} $line -> slack_val trích xuất giá trị số đo slack vào biến slack_val",
      "E. Ký hiệu '^' đại diện cho vị trí kết thúc dòng và '$' đại diện cho vị trí bắt đầu dòng"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 70, 71, 72: Bảng pattern Slide 71 quy định: `\\d` (số), `\\w` (từ), `\\s` (khoảng trắng), `.` (bất kỳ ký tự), `* + ?` (lặp), capture group `(...)`. Slide 72 minh họa parse slack bằng regexp. Nhận định E sai đảo ngược: `^` là đầu dòng, `$` là cuối dòng.",
    theoryRef: "Chương 5 - Mục 3: Biểu thức chính quy (regexp)"
  },
  {
    id: 24,
    chapter: 5,
    chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
    question: "Lệnh regsub trong Tcl dùng để thay thế chuỗi theo regex. Những phát biểu nào sau đây là ĐÚNG?",
    badge: "Chọn 4 đáp án đúng",
    options: [
      "A. Tùy chọn '-all' yêu cầu thay thế toàn bộ tất cả các lần xuất hiện khớp mẫu trong chuỗi",
      "B. Nếu không có cờ '-all', lệnh regsub sẽ chỉ thay thế vị trí khớp mẫu đầu tiên tìm thấy",
      "C. Hỗ trợ tham chiếu ngược (backreferences) như \\1, \\2 để tái sử dụng giá trị các capture groups",
      "D. Chuỗi sau khi được thay thế có thể được gán tự động vào một biến đích chỉ định ở cuối câu lệnh",
      "E. regsub bắt buộc phải thay đổi trực tiếp nội dung tập tin trên đĩa chứ không thể xử lý chuỗi trên bộ nhớ"
    ],
    correct: [0, 1, 2, 3],
    explanation: "Theo Slide 73 và 79: 'regsub -all thay mọi lần khớp; không -all chỉ lần đầu', hỗ trợ tham chiếu `\\1 \\2`, gán chuỗi đã thay thế vào biến kết quả. regsub hoạt động trên chuỗi trong bộ nhớ RAM, không can thiệp trực tiếp file đĩa. Phương án E là sai.",
    theoryRef: "Chương 5 - Mục 3: Thay thế theo regex với regsub"
  },
  {
    id: 25,
    chapter: 5,
    chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
    question: "Trong thao tác tệp tin (File I/O) bằng Tcl, những phương pháp và quy tắc nào sau đây là CHUẨN XÁC?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. Mở tệp để đọc với mode 'r', ghi đè với mode 'w', và ghi nối tiếp vào cuối file với mode 'a'",
      "B. Đọc từng dòng của tệp bằng vòng lặp: while {[gets $fid line] >= 0} { ... }",
      "C. Đọc toàn bộ nội dung của tệp vào một biến bằng câu lệnh: set content [read $fid]",
      "D. Ghi dữ liệu vào tệp tin đang mở bằng câu lệnh: puts $fid \"data to write\"",
      "E. Best practice: Luôn bọc lệnh open trong cấu trúc catch để xử lý ngoại lệ, và bắt buộc phải gọi close $fid khi xong việc"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 74, 75, 79: Các modes r, w, a; đọc từng dòng bằng `while {[gets $fid line] >= 0}`; đọc toàn bộ bằng `[read $fid]`; ghi bằng `puts $fid`; Best practice: 'Luôn catch khi mở file, luôn close'. Cả 5 phương án đều chuẩn xác.",
    theoryRef: "Chương 5 - Mục 4: Thao tác File I/O chuẩn & An toàn"
  },

  // --- CHƯƠNG 6 (CÂU 26 - 30) ---
  {
    id: 26,
    chapter: 6,
    chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
    question: "Tcl được tích hợp và sử dụng như ngôn ngữ điều khiển native trong những công cụ EDA hàng đầu nào sau đây?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. Synopsys Design Compiler (Công cụ tổng hợp logic)",
      "B. Synopsys PrimeTime (Công cụ phân tích thời gian tĩnh STA)",
      "C. Cadence Innovus / Synopsys ICC2 (Công cụ thiết kế vật lý Place & Route)",
      "D. AMD / Xilinx Vivado (Môi trường thực thi FPGA Flow)",
      "E. Cadence Genus (Synthesis) và Tempus (Timing Analysis)"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo bảng thống kê Slide 83: Tcl được dùng native trong: Design Compiler (Synopsys - Synthesis), PrimeTime (Synopsys - STA), ICC2 (Synopsys - PnR), Innovus (Cadence - PnR), Genus (Cadence - Synthesis), Tempus (Cadence - Timing), Vivado (Xilinx - FPGA flow). Tất cả 5 công cụ đều hoàn toàn chính xác.",
    theoryRef: "Chương 6 - Mục 1: EDA tools dùng Tcl & Vị thế ngôn ngữ"
  },
  {
    id: 27,
    chapter: 6,
    chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
    question: "Trong quy trình tổng hợp logic với Synopsys Design Compiler (DC), những câu lệnh nào sau đây được sử dụng ĐÚNG chức năng?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. analyze -format verilog [list top.v adder.v] và elaborate $DESIGN_NAME để nạp và xây dựng thiết kế",
      "B. create_clock -name clk -period $CLK_PERIOD [get_ports clk] để thiết lập ràng buộc xung nhịp",
      "C. set_input_delay và set_output_delay để ràng buộc độ trễ cổng giao tiếp I/O",
      "D. compile_ultra để thực hiện tối ưu hóa và tổng hợp logic chuyên sâu",
      "E. write -format verilog để xuất netlist cổng và write_sdc để xuất ràng buộc định thời"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 85, 86, 95: Luồng 5 bước trong Design Compiler: 1. Đọc RTL (analyze/elaborate hoặc read_verilog); 2. Constraints (create_clock, I/O delay); 3. Compile (compile_ultra); 4. Report (report_timing, area, power); 5. Output (write netlist, write_sdc). Cả 5 phương án đều chuẩn xác.",
    theoryRef: "Chương 6 - Mục 3: Design Compiler synthesis cơ bản"
  },
  {
    id: 28,
    chapter: 6,
    chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
    question: "Trong phân tích định thời tĩnh (STA) với Synopsys PrimeTime, những câu lệnh và phương pháp nào được sử dụng để kiểm tra và gỡ lỗi vi phạm timing?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. report_timing -delay_type max dùng để báo cáo kiểm tra vi phạm Setup Time",
      "B. report_timing -delay_type min dùng để báo cáo kiểm tra vi phạm Hold Time",
      "C. get_timing_paths -delay_type max -slack_lesser_than 0 để truy vấn tất cả các đường truyền bị vi phạm slack âm",
      "D. foreach_in_collection path $paths kết hợp get_attribute để lấy startpoint, endpoint và slack của từng đường",
      "E. Phân loại các đường truyền vi phạm thành reg2reg, reg2out, in2reg và ưu tiên sửa worst slack trước"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 88, 89, 95: PrimeTime kiểm tra max delay (setup), min delay (hold); lấy các đường vi phạm bằng `get_timing_paths -slack_lesser_than 0`; duyệt collection trích xuất thông tin qua `get_attribute`; phân loại path (reg2reg, in2reg, reg2out) và ưu tiên fix worst slack trước. Tất cả 5 phương án đều chính xác.",
    theoryRef: "Chương 6 - Mục 4: PrimeTime STA & Debug Timing Violations"
  },
  {
    id: 29,
    chapter: 6,
    chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
    question: "Trong quy trình thiết kế vật lý Place & Route (PnR) trên Cadence Innovus, những bước nào sau đây phản ánh ĐÚNG các giai đoạn thực thi?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. Khởi tạo (Init): Nạp thư viện LEF, nạp netlist Verilog và khởi tạo môi trường thiết kế",
      "B. Quy hoạch mặt bằng (Floorplan): Thiết lập tỷ lệ diện tích khung chip core density và dựng lưới nguồn",
      "C. Định vị linh kiện (Placement): Sắp đặt hàng trăm nghìn cell chuẩn tối ưu theo định thời (place_design)",
      "D. Cây xung nhịp (CTS): Xây dựng mạng lưới đệm phân phối xung nhịp cân bằng (clock_design)",
      "E. Định tuyến và Xác thực: Chạy route_design, tối ưu hóa hậu định tuyến, kiểm tra DRC/LVS và xuất file DEF/GDS"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 90, 91, 95: Các giai đoạn PnR trên Innovus gồm: 1. Init (LEF, netlist, tech); 2. Floorplan + power plan; 3. Placement (timing-driven); 4. CTS (clock tree); 5. Routing + post-route opt; 6. Verify DRC/LVS + export DEF/GDS. Tất cả 5 phương án đều chuẩn xác.",
    theoryRef: "Chương 6 - Mục 5: Innovus Place & Route Flow"
  },
  {
    id: 30,
    chapter: 6,
    chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
    question: "Khi xây dựng kịch bản tự động hóa dòng chảy công cụ tích hợp (Unified Multi-Tool Flow) và kiểm thử hồi quy (Regression), những kỹ thuật nào là Best Practice?",
    badge: "Chọn tất cả các phương án đúng",
    options: [
      "A. Sử dụng cấu trúc switch $tool để gọi các script con tương ứng cho từng công cụ (dc, pt, innovus, vivado)",
      "B. Tách toàn bộ các biến cấu hình (DESIGN_NAME, CLK_PERIOD, thư viện) ra đầu kịch bản hoặc file config riêng",
      "C. Bọc các lệnh thực thi công cụ ngoài (exec) và thao tác file trong khối catch để kiểm soát lỗi runtime",
      "D. Quản lý toàn bộ phiên bản của kịch bản tự động hóa bằng hệ thống quản lý mã nguồn Git",
      "E. Tự động tính toán số bài test Pass, Fail và tỷ lệ phần trăm thành công để xuất ra báo cáo tổng kết"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Theo Slide 86, 93, 94, 95: Best practices gồm: Modular proc, tách biến config ra đầu script, dùng switch điều phối đa công cụ, bọc catch/log, quản lý version control Git, tự động tính tỷ lệ Pass/Fail trong regression framework. Cả 5 phương án đều chuẩn xác.",
    theoryRef: "Chương 6 - Mục 6: Unified Multi-Tool Flow & Regression Framework"
  }
];
