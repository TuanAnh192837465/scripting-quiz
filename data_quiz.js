// Ngân hàng Đề thi Trắc nghiệm Lập trình Script EDA (Chương 1-6)
// ĐHBK Đà Nẵng - Tác giả: ThS. Nguyễn Duy Nhật Viễn
// Bao gồm: Đề 1 (Toàn diện), Đề 2 (Thực chiến EDA), Đề 3 (Cú pháp Chuyên sâu), và Đề Ngẫu nhiên.
// Hỗ trợ cả 2 dạng: Câu hỏi chọn 1 đáp án (Single) và Chọn nhiều đáp án (Multi).

const EXAM_SETS = {
  exam_1: {
    id: "exam_1",
    title: "Đề 1: Đề thi Toàn diện Chương 1–6",
    description: "Bộ đề chuẩn mực gồm 30 câu bao quát đầy đủ lý thuyết cốt lõi từ Chương 1 đến Chương 6, kết hợp hài hòa giữa câu hỏi 1 đáp án và câu hỏi nhiều đáp án.",
    questions: [
      // --- CHƯƠNG 1 ---
      {
        id: 101,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Các công đoạn nào sau đây thuộc về pha Frontend (thiết kế chức năng) trong quy trình thiết kế vi mạch (IC Design Flow)?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. RTL Design (Mô tả phần cứng bằng Verilog/SystemVerilog)",
          "B. Functional Verification (Mô phỏng kiểm tra chức năng hệ thống)",
          "C. Logic Synthesis (Tổng hợp mã RTL thành netlist cổng logic chuẩn)",
          "D. Clock Tree Synthesis (CTS - Cân bằng cây phân phối xung nhịp)",
          "E. Floorplanning & Placement (Quy hoạch mặt bằng và định vị cell vật lý)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 5, IC Design Flow chia làm 2 giai đoạn: Frontend gồm RTL Design, Functional Verification, và Synthesis. Backend (Physical Design) gồm Floorplanning & Placement, CTS và Routing & Signoff. Do đó A, B, C thuộc Frontend.",
        theoryRef: "Chương 1 - Mục 1: Quy trình thiết kế vi mạch (Frontend vs Backend)"
      },
      {
        id: 102,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Theo triết lý 'Script-First', 'Quy tắc vàng' trong tự động hóa thiết kế vi mạch đề xuất điều gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Bất kỳ công việc nào cần làm lặp lại nhiều hơn 2 lần thì lập tức viết script",
          "B. Luôn luôn dùng chuột click menu GUI trước khi viết script cho mọi tác vụ",
          "C. Chỉ viết script khi dự án đã hoàn thành tape-out",
          "D. Không bao giờ được phép sử dụng lại các đoạn mã kịch bản cũ"
        ],
        correct: [0],
        explanation: "Theo Slide 7, Quy tắc vàng là: 'Làm việc nhiều hơn 2 lần → viết script'. Chuyển đổi tư duy từ 'Click menu nào?' sang 'Lệnh nào thực hiện? Làm sao đưa vào script?'.",
        theoryRef: "Chương 1 - Mục 2: Tư duy Script-First"
      },
      {
        id: 103,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Những hạn chế chí mạng nào của giao diện đồ họa (GUI) trong môi trường thiết kế vi mạch đòi hỏi kỹ sư phải dùng Scripting?",
        badge: "☑️ Chọn 4 đáp án đúng",
        options: [
          "A. Tính không thể tái tạo (Non-reproducible) chính xác chuỗi thao tác bấm nút phức tạp",
          "B. Không thể mở rộng (Scalability) khi số lượng bài test lên tới hàng nghìn",
          "C. Không thể tích hợp tự động vào hệ thống kiểm thử liên tục CI/CD và chạy theo lịch trình",
          "D. Dễ phát sinh sai sót của con người khi phải lặp đi lặp lại thao tác thủ công",
          "E. GUI hoàn toàn không thể hiển thị được dạng sóng tín hiệu xung nhịp (waveform)"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Theo Slide 6, các nhược điểm của GUI là: Không tái tạo được, Không mở rộng được, Không tích hợp CI/CD, Khó chia sẻ và cộng tác, Dễ sai sót khi lặp lại. E sai vì GUI vẫn rất tốt cho việc xem waveform tương tác.",
        theoryRef: "Chương 1 - Mục 2: Hạn chế của GUI"
      },
      {
        id: 104,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Trong 'Bộ ba quyền lực' kịch bản vi mạch, ngôn ngữ nào đóng vai trò là 'Glue language' kết nối các công cụ trên nền tảng Linux?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Bash Shell",
          "B. Tcl",
          "C. Python",
          "D. Perl"
        ],
        correct: [0],
        explanation: "Theo Slide 9 và 15: Bash là 'Glue language: kết nối EDA tools, automation hàng loạt, nền tảng tự động hóa thiết kế chip trên Linux'.",
        theoryRef: "Chương 1 - Mục 4: So sánh ngôn ngữ scripting"
      },
      {
        id: 105,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Phát biểu nào sau đây là ĐÚNG về kiểm thử hồi quy (Regression Testing) trong thiết kế vi mạch?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Là việc chạy lại tập hợp lớn các bài kiểm tra sau khi có thay đổi trong thiết kế RTL hoặc công cụ EDA",
          "B. Giúp phát hiện lỗi sớm (fail-fast) và đảm bảo chất lượng thiết kế sau mỗi lần commit mã nguồn",
          "C. Các bài test cases được coi như tài liệu sống (living documentation) của thiết kế",
          "D. Trong thực tế công nghiệp, kỹ sư chỉ chạy regression thủ công 1 lần duy nhất trước khi tape-out"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 8 và 11: Regression testing phát hiện lỗi sớm, đảm bảo chất lượng sau mỗi commit, test cases là tài liệu sống. Trong thực tế công nghiệp chạy >100.000 test cases/ngày trên cluster máy chủ, không phải chạy thủ công 1 lần. Do đó A, B, C đúng.",
        theoryRef: "Chương 1 - Mục 3: Regression Testing"
      },

      // --- CHƯƠNG 2 ---
      {
        id: 106,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Cấu trúc thư mục chuẩn của một dự án IC Design trên Linux thường gồm những thư mục nào?",
        badge: "☑️ Chọn tất cả các phương án đúng",
        options: [
          "A. rtl/ - Chứa mã nguồn mô tả phần cứng thiết kế",
          "B. tb/ - Chứa mã nguồn các khối testbench kiểm tra",
          "C. sim/ - Thư mục chạy mô phỏng và lưu kết quả/log",
          "D. synth/ - Thư mục thực thi kịch bản tổng hợp logic",
          "E. reports/ - Chứa các file báo cáo timing, area, power"
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: "Theo Slide 16 và 22: Cấu trúc project chuẩn gồm rtl/, tb/, sim/, synth/, reports/, scripts/, và Makefile. Cả 5 phương án đều chuẩn xác.",
        theoryRef: "Chương 2 - Mục 1: Cấu trúc thư mục Linux"
      },
      {
        id: 107,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Trong Linux, lệnh 'chmod 755 script.sh' cấp các quyền truy cập cụ thể nào cho tệp tin?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Chủ sở hữu (Owner) có quyền đọc, ghi, thực thi (rwx); Nhóm (Group) và người khác (Others) có quyền đọc và thực thi (r-x)",
          "B. Tất cả mọi người đều có toàn quyền đọc, ghi, và thực thi (rwx)",
          "C. Chủ sở hữu chỉ có quyền đọc; Nhóm và người khác có quyền ghi",
          "D. Tệp tin bị khóa hoàn toàn không cho phép thực thi"
        ],
        correct: [0],
        explanation: "Theo Slide 18: 7 = 4(r) + 2(w) + 1(x) = rwx. 5 = 4(r) + 0 + 1(x) = r-x. Do đó 755 cấp rwx cho Owner, r-x cho Group và Others. Đây là best practice cho script automation.",
        theoryRef: "Chương 2 - Mục 2: Phân quyền tệp với chmod"
      },
      {
        id: 108,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Về phân quyền file trong Linux bằng lệnh chmod, những câu lệnh nào sau đây cấp quyền thực thi (execution) cho file script?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. chmod 755 script.sh",
          "B. chmod u+x script.sh",
          "C. chmod +x script.sh",
          "D. chmod 644 script.sh",
          "E. chmod 444 script.sh"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 18: chmod 755, chmod u+x, chmod +x đều bổ sung bit thực thi 'x'. Còn 644 (rw-r--r--) và 444 (r--r--r--) không có quyền thực thi x.",
        theoryRef: "Chương 2 - Mục 2: Phân quyền tệp với chmod"
      },
      {
        id: 109,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Khi cần tìm kiếm từ khóa báo lỗi 'ERROR' trong các file log mà không phân biệt chữ hoa hay chữ thường, tùy chọn nào của lệnh grep được sử dụng?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. grep -i",
          "B. grep -r",
          "C. grep -v",
          "D. grep -n"
        ],
        correct: [0],
        explanation: "Theo Slide 19: `grep -i` là tùy chọn tìm kiếm không phân biệt chữ hoa chữ thường (case-insensitive). `-r` là đệ quy qua các thư mục.",
        theoryRef: "Chương 2 - Mục 3: Text processing"
      },
      {
        id: 110,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Khi làm việc với chuyển hướng I/O (Redirection) và Pipes trong Bash, những câu lệnh nào sau đây đúng cú pháp và ý nghĩa sử dụng trong IC Design?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. dc_shell -f run.tcl > log.txt 2>&1  (Gộp cả stdout và stderr vào log.txt)",
          "B. find . -name \"*.v\" | wc -l  (Đếm tổng số file Verilog trong cây thư mục dự án)",
          "C. grep VIOLATION *.rpt | head -10  (Lọc ra 10 dòng đầu tiên có chứa chuỗi VIOLATION)",
          "D. cat log.txt > grep ERROR  (Cú pháp lọc lỗi hợp lệ)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 19: Các lệnh A, B, C đều là cú pháp kinh điển chuẩn Unix. D sai vì không thể chuyển hướng đầu ra vào lệnh grep bằng dấu `>` (phải dùng pipe `| grep ERROR`).",
        theoryRef: "Chương 2 - Mục 3: Pipes và Chuyển hướng I/O"
      },

      // --- CHƯƠNG 3 ---
      {
        id: 111,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Triết lý thiết kế cơ bản nhất của bộ thông dịch Tcl (Tcl Interpreter) là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Mọi thứ đều là Command và mọi cấu trúc dữ liệu đều có thể biểu diễn dưới dạng String",
          "B. Mọi biến đều phải khai báo kiểu tĩnh (như int, float) trước khi biên dịch",
          "C. Mọi file mã nguồn Tcl phải được biên dịch ra mã máy nhị phân (.exe) trước khi chạy",
          "D. Tcl chỉ hỗ trợ xử lý số nguyên và không thể thao tác với chuỗi ký tự"
        ],
        correct: [0],
        explanation: "Theo Slide 26, 27: 'Tcl interpreter: mọi thứ là command' và 'Quy tắc cơ bản: Mọi thứ trong Tcl đều là string'. Biến không cần khai báo kiểu.",
        theoryRef: "Chương 3 - Mục 1: Triết lý ngôn ngữ Tcl"
      },
      {
        id: 112,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "multi",
        question: "Tcl Interpreter hỗ trợ 3 cơ chế thay thế (Substitution) nào sau đây?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Thay thế biến (Variable substitution) sử dụng ký tự '$'",
          "B. Thay thế lệnh (Command substitution) sử dụng cặp ngoặc vuông '[]'",
          "C. Thay thế ký tự đặc biệt (Backslash substitution) sử dụng dấu '\\'",
          "D. Thay thế con trỏ bộ nhớ (Pointer dereference) thông qua toán tử '*'"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 28, 43: Tcl hỗ trợ đúng 3 loại substitution: Biến `$`, Command `[]`, và Backslash `\\`. Tcl không quản lý con trỏ `*`.",
        theoryRef: "Chương 3 - Mục 2: Ba loại substitution"
      },
      {
        id: 113,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Trong Tcl, cặp dấu nào giữ nguyên vẹn nội dung văn bản (literal/raw) và vô hiệu hóa mọi cơ chế thay thế biến ($) và lệnh ([])?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Cặp dấu ngoặc nhọn { } (Braces)",
          "B. Cặp dấu ngoặc kép \" \" (Double quotes)",
          "C. Cặp dấu ngoặc đơn ( ) (Parentheses)",
          "D. Cặp dấu ngoặc vuông [ ] (Brackets)"
        ],
        correct: [0],
        explanation: "Theo Slide 29, 30: 'Braces: giữ nguyên văn (không substitution)'. Double quotes '\" \"' cho phép substitution. Dấu ngoặc vuông '[ ]' dùng để thay thế lệnh.",
        theoryRef: "Chương 3 - Mục 3: Quotes so với Braces"
      },
      {
        id: 114,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "multi",
        question: "Về tính toán số học với lệnh expr trong Tcl, những phát biểu nào sau đây là CHUẨN XÁC theo Best Practice?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Luôn luôn bọc biểu thức tính toán trong cặp ngoặc nhọn: expr {$a + $b}",
          "B. Việc bọc ngoặc nhọn trong expr giúp tránh lỗi thay thế hai lần (double substitution)",
          "C. Việc bọc ngoặc nhọn giúp Tcl compiler tối ưu hóa biên dịch bytecode và chạy nhanh hơn",
          "D. Lệnh expr không hỗ trợ số thực nên không thể tính chu kỳ định thời lẻ"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 32: 'Best practice: Luôn viết expr {$a + $b} — tránh double substitution, nhanh hơn.' expr hỗ trợ đầy đủ số thực và logic (D sai).",
        theoryRef: "Chương 3 - Mục 4: Toán học với expr"
      },
      {
        id: 115,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Khi sử dụng lệnh 'lsearch $list target' trong Tcl, nếu phần tử 'target' không tồn tại trong danh sách, kết quả trả về là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. -1",
          "B. 0",
          "C. false",
          "D. null"
        ],
        correct: [0],
        explanation: "Theo Slide 36: Lệnh `lsearch $modules shifter` trả về `-1` khi không tìm thấy phần tử.",
        theoryRef: "Chương 3 - Mục 5: Thao tác List trong Tcl"
      },

      // --- CHƯƠNG 4 ---
      {
        id: 116,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Trong cấu trúc rẽ nhánh của Tcl, từ khóa kiểm tra điều kiện nhánh phụ nào sau đây là ĐÚNG cú pháp?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. elseif (viết liền)",
          "B. else if (có khoảng trắng ở giữa)",
          "C. elif",
          "D. else_if"
        ],
        correct: [0],
        explanation: "Theo Slide 46, 47: Trong Tcl, từ khóa bắt buộc viết liền là `elseif`. Viết `else if` sẽ bị lỗi cú pháp do Tcl hiểu là lệnh else nhận đối số if.",
        theoryRef: "Chương 4 - Mục 1: if / elseif / else"
      },
      {
        id: 117,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "multi",
        question: "Câu lệnh switch trong Tcl hỗ trợ những tùy chọn phân nhánh theo pattern nào sau đây?",
        badge: "☑️ Chọn 4 đáp án đúng",
        options: [
          "A. -exact (so khớp chính xác chuỗi, là tùy chọn mặc định)",
          "B. -glob (so khớp theo mẫu ký tự đại diện wildcard *, ?)",
          "C. -regexp (so khớp theo biểu thức chính quy)",
          "D. -nocase (so khớp không phân biệt chữ hoa/thường)",
          "E. -integer (chỉ cho phép so sánh số nguyên dương)"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Theo Slide 49: 'Options: -exact (mặc định), -glob, -regexp, -nocase'. Không có tùy chọn `-integer` trong lệnh switch của Tcl.",
        theoryRef: "Chương 4 - Mục 2: Câu lệnh switch"
      },
      {
        id: 118,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Vòng lặp nào được coi là quan trọng nhất và được sử dụng thường xuyên nhất trong kịch bản EDA khi duyệt cells, nets, pins, files?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. foreach",
          "B. while",
          "C. for",
          "D. loop"
        ],
        correct: [0],
        explanation: "Theo Slide 46, 51: 'foreach: vòng lặp quan trọng nhất... EDA tip: Ưu tiên foreach khi duyệt cells, nets, pins, files'.",
        theoryRef: "Chương 4 - Mục 3: Vòng lặp foreach"
      },
      {
        id: 119,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "multi",
        question: "Trong Tcl, việc định nghĩa thủ tục (proc) và tham số hỗ trợ những tính năng nào sau đây?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Cú pháp định nghĩa là: proc ten {args} {body}",
          "B. Hỗ trợ thiết lập giá trị mặc định cho tham số: proc run_synth {design {clk 10}} { ... }",
          "C. Có thể dùng lệnh 'return' để trả kết quả tính toán về cho nơi gọi",
          "D. Tất cả các biến khai báo trong hàm tự động trở thành biến toàn cục mà không cần khai báo gì"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 55, 56: Cú pháp proc, tham số mặc định và lệnh return đều đúng. Phương án D sai vì biến trong proc mặc định là local scope; muốn dùng biến toàn cục phải khai báo từ khóa `global`.",
        theoryRef: "Chương 4 - Mục 4: Định nghĩa thủ tục proc"
      },
      {
        id: 120,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Khi thực thi thành công một câu lệnh mà không gặp lỗi, lệnh 'catch {command} var_result' trong Tcl trả về giá trị số nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. 0",
          "B. 1",
          "C. -1",
          "D. true"
        ],
        correct: [0],
        explanation: "Theo Slide 58: `catch` trả về 0 nếu câu lệnh thành công (pass). Nếu có lỗi runtime, catch trả về giá trị khác 0 (thường là 1) và lưu thông điệp lỗi vào biến kết quả.",
        theoryRef: "Chương 4 - Mục 5: Bắt lỗi với catch"
      },

      // --- CHƯƠNG 5 ---
      {
        id: 121,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Lệnh '[string length \"Hello World\"]' trong Tcl trả về kết quả là bao nhiêu?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. 11",
          "B. 10",
          "C. 12",
          "D. 2"
        ],
        correct: [0],
        explanation: "Theo Slide 66: Chuỗi 'Hello World' gồm 5 chữ cái 'Hello' + 1 khoảng trắng + 5 chữ cái 'World' = 11 ký tự. Lệnh trả về 11.",
        theoryRef: "Chương 5 - Mục 1: Thao tác Chuỗi"
      },
      {
        id: 122,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "multi",
        question: "Các câu lệnh chuỗi nào sau đây trong Tcl hoạt động đúng theo quy ước ngôn ngữ?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. [string index $text end] lấy ký tự cuối cùng của chuỗi",
          "B. [string range $text 0 4] trích xuất chuỗi con từ chỉ số 0 đến 4",
          "C. [string match -nocase \"*FOX*\" $s] kiểm tra khớp mẫu không phân biệt hoa thường",
          "D. Chỉ số chuỗi trong Tcl luôn bắt đầu đánh số từ 1"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 66, 67: `string index` (end là ký tự cuối), `string range`, `string match -nocase` đều chính xác. D sai vì chỉ số chuỗi trong Tcl bắt đầu từ 0.",
        theoryRef: "Chương 5 - Mục 1: Thao tác Chuỗi"
      },
      {
        id: 123,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Khi sử dụng lệnh regsub để thay thế chuỗi theo biểu thức chính quy, tùy chọn nào bắt buộc phải có để thay thế TOÀN BỘ các lần khớp mẫu?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. -all",
          "B. -global",
          "C. -g",
          "D. -full"
        ],
        correct: [0],
        explanation: "Theo Slide 73: 'Tip: regsub -all thay mọi lần khớp; không -all chỉ lần đầu'. Do đó tùy chọn đúng là `-all`.",
        theoryRef: "Chương 5 - Mục 3: Thay thế bằng regsub"
      },
      {
        id: 124,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "multi",
        question: "Trong thao tác tệp tin (File I/O) bằng Tcl, những chế độ mở tệp (modes) nào sau đây là hợp lệ?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. 'r' - Mở tệp để đọc (read)",
          "B. 'w' - Mở tệp để ghi đè (write)",
          "C. 'a' - Mở tệp để ghi nối tiếp vào cuối (append)",
          "D. 'x' - Mở tệp để tự động biên dịch sang mã máy"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 74: 'Modes: r đọc, w ghi (ghi đè), a append, r+/w+/a+ kết hợp'. Không có mode 'x' trong lệnh open của Tcl.",
        theoryRef: "Chương 5 - Mục 4: File I/O open / close"
      },
      {
        id: 125,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Trong biểu thức chính quy (Regex), ký hiệu nào đại diện cho một chữ số bất kỳ từ 0 đến 9?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. \\d",
          "B. \\w",
          "C. \\s",
          "D. ."
        ],
        correct: [0],
        explanation: "Theo Slide 71: `\\d` đại diện cho chữ số 0-9. `\\w` là ký tự từ (chữ và số), `\\s` là khoảng trắng, và `.` là bất kỳ ký tự nào.",
        theoryRef: "Chương 5 - Mục 3: Regex patterns"
      },

      // --- CHƯƠNG 6 ---
      {
        id: 126,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Những công cụ EDA công nghiệp hàng đầu nào sau đây sử dụng Tcl làm ngôn ngữ điều khiển native?",
        badge: "☑️ Chọn tất cả các phương án đúng",
        options: [
          "A. Synopsys Design Compiler (Synthesis)",
          "B. Synopsys PrimeTime (Static Timing Analysis - STA)",
          "C. Cadence Innovus (Place & Route - PnR)",
          "D. AMD / Xilinx Vivado (FPGA Flow)",
          "E. Cadence Genus (Synthesis) & Tempus (Timing)"
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: "Theo bảng thống kê Slide 83: Tất cả các công cụ trên (Design Compiler, PrimeTime, ICC2, Innovus, Genus, Tempus, Vivado) đều dùng Tcl làm ngôn ngữ kịch bản native.",
        theoryRef: "Chương 6 - Mục 1: EDA tools dùng Tcl"
      },
      {
        id: 127,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong Synopsys Design Compiler, câu lệnh nào được sử dụng để chạy thuật toán tổng hợp logic và tối ưu hóa sâu nhất?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. compile_ultra",
          "B. compile_fast",
          "C. run_synth",
          "D. synthesize_all"
        ],
        correct: [0],
        explanation: "Theo Slide 85, 86: Câu lệnh chuẩn để tổng hợp tối ưu chuyên sâu trong Design Compiler là `compile_ultra`.",
        theoryRef: "Chương 6 - Mục 3: Design Compiler synthesis cơ bản"
      },
      {
        id: 128,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Các câu lệnh Tcl chuẩn nào sau đây được dùng để truy vấn các đối tượng phần cứng trong cơ sở dữ liệu EDA?",
        badge: "☑️ Chọn 4 đáp án đúng",
        options: [
          "A. get_cells (Truy vấn các linh kiện / logic cells)",
          "B. get_nets (Truy vấn các đường dây kết nối tín hiệu)",
          "C. get_pins (Truy vấn các chân linh kiện)",
          "D. get_ports (Truy vấn các cổng I/O ngoại vi)",
          "E. get_windows (Lệnh vẽ đồ thị giao diện người dùng)"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Theo Slide 84: Các lệnh truy vấn đối tượng thiết kế chuẩn trong DC/PT gồm: `get_cells`, `get_nets`, `get_pins`, `get_ports`. Phương án E không phải lệnh EDA database.",
        theoryRef: "Chương 6 - Mục 2: Tcl là common interface"
      },
      {
        id: 129,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong phân tích thời gian tĩnh (STA) bằng PrimeTime, đường truyền dữ liệu được coi là BỊ VI PHẠM định thời khi giá trị Slack thỏa mãn điều kiện nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Slack < 0 (Slack có giá trị âm)",
          "B. Slack > 0 (Slack có giá trị dương)",
          "C. Slack = 0",
          "D. Slack > 1.0 ns"
        ],
        correct: [0],
        explanation: "Theo Slide 88, 89: Vi phạm timing (violation) xảy ra khi Slack âm (`slack < 0`). Lệnh truy vấn đường vi phạm: `get_timing_paths -slack_lesser_than 0`.",
        theoryRef: "Chương 6 - Mục 4: PrimeTime STA & Debug violations"
      },
      {
        id: 130,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Trong quy trình thiết kế vật lý Place & Route (PnR) trên Cadence Innovus, những giai đoạn nào sau đây thuộc về luồng thực thi chuẩn?",
        badge: "☑️ Chọn tất cả các phương án đúng",
        options: [
          "A. Init: Nạp thư viện LEF, netlist và thông số công nghệ",
          "B. Floorplan: Định hình khung chip và lưới cấp nguồn",
          "C. Placement: Định vị hàng triệu tế bào chuẩn (standard cells)",
          "D. Clock Tree Synthesis (CTS): Cân bằng cây xung nhịp",
          "E. Routing & Verify: Đi dây kim loại và kiểm tra DRC/LVS"
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: "Theo Slide 91: Các giai đoạn PnR trên Innovus gồm 6 bước: 1. Init -> 2. Floorplan + power plan -> 3. Placement -> 4. CTS -> 5. Routing + postRoute -> 6. Verify DRC/LVS + export DEF/GDS. Cả 5 phương án đều chuẩn xác.",
        theoryRef: "Chương 6 - Mục 5: Innovus PnR Flow"
      }
    ]
  },

  exam_2: {
    id: "exam_2",
    title: "Đề 2: Thực chiến Dòng chảy EDA & Tự động hóa",
    description: "Bộ đề 30 câu tập trung chuyên sâu vào ứng dụng thực tiễn: kịch bản tổng hợp Design Compiler, phân tích STA PrimeTime, flow PnR Innovus, phân tích log, và kiểm thử hồi quy Regression.",
    questions: [
      // --- CHƯƠNG 1 (CÂU 201-205) ---
      {
        id: 201,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Trong quy trình thiết kế vi mạch (IC Design Flow), công đoạn nào chịu trách nhiệm chuyển đổi mã nguồn RTL thành danh sách liên kết cổng logic (gate-level netlist)?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Logic Synthesis (Tổng hợp logic)",
          "B. Functional Verification (Mô phỏng chức năng)",
          "C. Floorplanning (Quy hoạch mặt bằng)",
          "D. Clock Tree Synthesis (Dựng cây xung nhịp)"
        ],
        correct: [0],
        explanation: "Theo Slide 5: Giai đoạn Logic Synthesis nằm ở cuối pha Frontend, nhận mã RTL (Verilog/VHDL) và ánh xạ sang thư viện cổng logic chuẩn của nhà máy bán dẫn.",
        theoryRef: "Chương 1 - Mục 1: Quy trình thiết kế vi mạch"
      },
      {
        id: 202,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Trong ví dụ thực tế so sánh hiệu quả giữa GUI và Scripting ở Slide 6 khi tổng hợp 50 modules, những thông số nào sau đây phản ánh đúng?",
        badge: "☑️ Chọn 2 đáp án đúng",
        options: [
          "A. Dùng GUI thao tác thủ công mất tổng cộng 250 phút",
          "B. Dùng Scripting: viết script mất 30 phút và máy chạy tự động chỉ mất 10 phút",
          "C. Dùng GUI chạy nhanh hơn viết script 100 phút",
          "D. Dùng Scripting đòi hỏi phải có giao diện đồ họa bản quyền đắt tiền hơn"
        ],
        correct: [0, 1],
        explanation: "Theo Slide 6: 'Ví dụ: synthesis 50 modules. GUI: 250 phút. Script: viết 30 phút + chạy 10 phút'. Điều này minh chứng cho tính vượt trội về năng suất của tư duy Script-First.",
        theoryRef: "Chương 1 - Mục 2: Hạn chế của GUI"
      },
      {
        id: 203,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Ngôn ngữ kịch bản nào đang có xu hướng tăng trưởng MẠNH NHẤT trong thiết kế vi mạch hiện đại nhờ khả năng phân tích dữ liệu lớn và ứng dụng AI/ML?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Python",
          "B. Perl",
          "C. Bash",
          "D. Tcl"
        ],
        correct: [0],
        explanation: "Theo bảng so sánh Slide 9: Python có xu hướng 'Tăng mạnh' nhờ thư viện phong phú và năng lực xử lý dữ liệu (Data & Libraries).",
        theoryRef: "Chương 1 - Mục 4: So sánh ngôn ngữ scripting"
      },
      {
        id: 204,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Bộ ba công cụ phần mềm thiết yếu (Essential Tools) của một kỹ sư vi mạch trên môi trường Linux bao gồm những gì?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Hệ thống Linux (RHEL, Ubuntu, CentOS)",
          "B. Hệ thống quản lý phiên bản Git",
          "C. Trình biên tập văn bản (Editor: Vim, VS Code, Emacs)",
          "D. Phần mềm Microsoft Office PowerPoint"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 10: 'Công cụ thiết yếu: Linux (RHEL/Ubuntu), Git, Editor (Vim, VS Code, Emacs), Text tools (grep, sed, awk, find)'.",
        theoryRef: "Chương 1 - Mục 5: Môi trường phát triển Linux"
      },
      {
        id: 205,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Trong các công ty bán dẫn lớn, số lượng test cases được chạy kiểm thử hồi quy (Regression Testing) tự động mỗi ngày trên hệ thống cluster tính toán là khoảng bao nhiêu?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Hơn 100.000 test cases mỗi ngày",
          "B. Khoảng 50 test cases mỗi tuần",
          "C. Đúng 10 test cases trước ngày tape-out",
          "D. Không bao giờ chạy quá 500 test cases"
        ],
        correct: [0],
        explanation: "Theo Slide 8: 'Thực tế công nghiệp: hơn 100.000 test cases mỗi ngày trên cluster máy chủ'.",
        theoryRef: "Chương 1 - Mục 3: Regression Testing"
      },

      // --- CHƯƠNG 2 (CÂU 206-210) ---
      {
        id: 206,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Lệnh Linux nào cho phép theo dõi nội dung cập nhật mới vào file log mô phỏng theo thời gian thực (real-time stream)?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. tail -f simulation.log",
          "B. head -10 simulation.log",
          "C. cat simulation.log",
          "D. ls -la simulation.log"
        ],
        correct: [0],
        explanation: "Theo Slide 19: Lệnh `tail -f simulation.log` liên tục in các dòng mới được ghi vào file log mô phỏng, rất tiện khi chạy batch.",
        theoryRef: "Chương 2 - Mục 3: Text processing"
      },
      {
        id: 207,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Những thư mục hệ thống nào sau đây trên Linux thường liên quan trực tiếp đến việc lưu trữ công cụ EDA và dữ liệu dự án chip?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. /opt/synopsys/ và /opt/cadence/ (Thư mục cài đặt công cụ EDA)",
          "B. /home/user/ic_projects/ (Thư mục dự án thiết kế của kỹ sư)",
          "C. /tmp/ (Thư mục chứa các file tạm trong quá trình chạy công cụ)",
          "D. C:\\Windows\\System32\\ (Thư mục hệ thống Linux)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 16: Cấu trúc thư mục Linux trong vi mạch gồm `/opt/synopsys/`, `/opt/cadence/`, `/home/user/ic_projects/`, `/tmp/`. D là thư mục của hệ điều hành Windows.",
        theoryRef: "Chương 2 - Mục 1: Cấu trúc thư mục Linux"
      },
      {
        id: 208,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Trong kịch bản Bash cho môi trường production, tùy chọn 'set -euo pipefail' mang lại lợi ích gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Dừng script ngay khi có bất kỳ lệnh nào bị lỗi hoặc có biến chưa định nghĩa, ngăn ngừa chạy sai lan truyền",
          "B. Tự động tăng tốc độ CPU của máy tính lên 200%",
          "C. Vô hiệu hóa toàn bộ quyền truy cập của người dùng khác",
          "D. Tự động biên dịch mã nguồn Verilog ra file bitstream"
        ],
        correct: [0],
        explanation: "Theo Slide 23: 'Best practices: Dùng set -euo pipefail cho script production' để đảm bảo tính an toàn nghiêm ngặt khi thực thi dòng lệnh tự động.",
        theoryRef: "Chương 2 - Mục 4: Best practices Bash"
      },
      {
        id: 209,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Lệnh awk trong Linux rất mạnh trong việc phân tích báo cáo vi mạch. Những ứng dụng nào sau đây của awk là chính xác?",
        badge: "☑️ Chọn 2 đáp án đúng",
        options: [
          "A. Trích xuất và in dữ liệu theo từng cột được chỉ định (ví dụ in tên port và slack)",
          "B. Lọc các dòng thỏa mãn điều kiện số học trên từng cột (ví dụ cột slack < 0)",
          "C. Dùng awk để vẽ layout chip 3D trực tiếp lên màn hình",
          "D. Dùng awk để thay thế hệ điều hành Linux bằng Windows"
        ],
        correct: [0, 1],
        explanation: "Theo Slide 19, 23: `awk` là công cụ xử lý văn bản dạng cột cực mạnh, chuyên trích xuất dữ liệu từ các báo cáo dạng bảng của Design Compiler và PrimeTime.",
        theoryRef: "Chương 2 - Mục 3: Text processing"
      },
      {
        id: 210,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Phân quyền 'chmod 644 report.txt' thiết lập quyền hạn cho tệp báo cáo như thế nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Chủ sở hữu có quyền đọc và ghi (rw-); Nhóm và người khác chỉ có quyền đọc (r--)",
          "B. Tất cả mọi người đều có quyền thực thi",
          "C. Không ai có quyền đọc file này",
          "D. Chủ sở hữu chỉ có quyền đọc; người khác có toàn quyền"
        ],
        correct: [0],
        explanation: "Theo Slide 18: 6 = 4+2 (rw-), 4 = 4 (r--). `chmod 644 report.txt` là quyền chuẩn cho file tài liệu/báo cáo văn bản.",
        theoryRef: "Chương 2 - Mục 2: Phân quyền chmod"
      },

      // --- CHƯƠNG 3 (CÂU 211-215) ---
      {
        id: 211,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Xét câu lệnh EDA: 'create_clock -period {$clock_period} [get_ports clk]'. Câu lệnh này sẽ xảy ra hiện tượng gì khi chạy?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Lỗi, vì dấu ngoặc nhọn { } giữ nguyên văn bản nên biến $clock_period không được thay thế bằng giá trị số thực",
          "B. Chạy hoàn hảo không có bất kỳ lỗi nào",
          "C. Giá trị $clock_period tự động được nhân đôi",
          "D. Công cụ tự động gán chu kỳ xung nhịp là 0 ns"
        ],
        correct: [0],
        explanation: "Theo Slide 30, 43: 'Dùng braces giữ nguyên văn, không substitution'. Do đó `create_clock -period {$clock_period}` sẽ gửi nguyên chuỗi '$clock_period' vào công cụ và gây lỗi runtime.",
        theoryRef: "Chương 3 - Mục 3: Khi nào dùng quotes / braces"
      },
      {
        id: 212,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "multi",
        question: "Những hàm nào sau đây trong Tcl được sử dụng để thao tác với cấu trúc Danh sách (Lists)?",
        badge: "☑️ Chọn 4 đáp án đúng",
        options: [
          "A. llength (Lấy số lượng phần tử của danh sách)",
          "B. lindex (Truy xuất phần tử theo chỉ số)",
          "C. lsearch (Tìm kiếm phần tử trong danh sách)",
          "D. lsort (Sắp xếp danh sách theo thứ tự)",
          "E. ldelete_all_files (Lệnh xóa toàn bộ tệp tin trong ổ cứng)"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Theo Slide 34, 35, 36: Các hàm chuẩn trên List gồm `list`, `lindex`, `lrange`, `lappend`, `linsert`, `lreplace`, `llength`, `lsearch`, `lsort`.",
        theoryRef: "Chương 3 - Mục 5: Lists cấu trúc cốt lõi"
      },
      {
        id: 213,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Để trích xuất danh sách tất cả các khóa (keys) của một mảng kết hợp 'power' trong Tcl, ta sử dụng câu lệnh nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. array names power",
          "B. array keys power",
          "C. power.keys()",
          "D. get_array_names power"
        ],
        correct: [0],
        explanation: "Theo Slide 37: Lệnh chuẩn trong Tcl để lấy danh sách tên các khóa của mảng là `array names power`.",
        theoryRef: "Chương 3 - Mục 5: Arrays key-value"
      },
      {
        id: 214,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "multi",
        question: "Phát biểu nào sau đây là ĐÚNG về mảng kết hợp (Associative Array) trong Tcl?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Lưu trữ dữ liệu dưới dạng cặp khóa - giá trị (key-value) dạng chuỗi",
          "B. Không phải là mảng chỉ số số nguyên liên tục trong bộ nhớ như mảng trong ngôn ngữ C",
          "C. Có thể giả lập mảng nhiều chiều bằng quy ước đặt tên key, ví dụ matrix(row,col)",
          "D. Mỗi mảng Tcl chỉ được chứa tối đa đúng 5 phần tử"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 37, 38: Tcl array là associative array không liên tục như C, lưu key-value, và giả lập nhiều chiều qua pattern `matrix(row,col)`. Không có giới hạn 5 phần tử (D sai).",
        theoryRef: "Chương 3 - Mục 5: Arrays"
      },
      {
        id: 215,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Trong câu lệnh expr của Tcl, toán tử nào được sử dụng để thực hiện phép tính lũy thừa (ví dụ 2 mũ 3)?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. **",
          "B. ^",
          "C. pow",
          "D. &"
        ],
        correct: [0],
        explanation: "Theo Slide 32: Danh sách toán tử thường dùng trong expr: `+ - * / % ** == != < > <= >= && || !`. Trong đó `**` là toán tử lũy thừa.",
        theoryRef: "Chương 3 - Mục 4: Toán học với expr"
      },

      // --- CHƯƠNG 4 (CÂU 216-220) ---
      {
        id: 216,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Khi sử dụng lệnh upvar trong thủ tục Tcl để truyền tham chiếu (sửa biến của hàm gọi), ta phải truyền đối số như thế nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Truyền TÊN BIẾN (ví dụ: count), không có ký tự '$'",
          "B. Bắt buộc phải có ký tự '$' trước tên biến (ví dụ: $count)",
          "C. Phải bọc tên biến trong ngoặc vuông: [count]",
          "D. Phải dùng con trỏ '&count' như trong C++"
        ],
        correct: [0],
        explanation: "Theo Slide 57: 'Lưu ý upvar: Truyền tên biến (count), không phải $count'. Đây là điểm mấu chốt để upvar có thể liên kết đúng biến của caller.",
        theoryRef: "Chương 4 - Mục 5: global và upvar"
      },
      {
        id: 217,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "multi",
        question: "Những nguyên tắc cú pháp nào sau đây là BẮT BUỘC khi viết cấu trúc rẽ nhánh 'if / elseif / else' trong Tcl?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Cả biểu thức điều kiện và thân khối lệnh đều phải bọc trong cặp ngoặc nhọn {}",
          "B. Dấu mở ngoặc nhọn '{' phải nằm trên cùng dòng với câu lệnh if, elseif hoặc else",
          "C. Từ khóa phân nhánh phụ bắt buộc phải viết liền là 'elseif'",
          "D. Không được phép sử dụng các toán tử logic như && hoặc || trong điều kiện"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 47: Bắt buộc dùng braces cho điều kiện và body, dấu `{` cùng dòng, từ khóa `elseif`. Toán tử hỗ trợ đầy đủ `&&`, `||`, `!`. D sai.",
        theoryRef: "Chương 4 - Mục 1: if / elseif / else"
      },
      {
        id: 218,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Trong vòng lặp duyệt các bài test của Tcl, câu lệnh nào được dùng để THOÁT NGAY LẬP TỨC khỏi vòng lặp khi phát hiện module bị lỗi?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. break",
          "B. continue",
          "C. exit",
          "D. stop"
        ],
        correct: [0],
        explanation: "Theo Slide 53: Lệnh `break` kết thúc ngay vòng lặp (Ví dụ Slide 53: `if {$module == \"err\"} { break }`). `continue` chỉ bỏ qua lần lặp hiện tại.",
        theoryRef: "Chương 4 - Mục 3: break và continue"
      },
      {
        id: 219,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "multi",
        question: "Cú pháp duyệt mảng và danh sách nào sau đây với vòng lặp foreach trong Tcl là hợp lệ?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. foreach module $modules { puts $module }",
          "B. foreach {name value} [list a 1 b 2] { puts \"$name = $value\" }",
          "C. foreach key [array names timing] { puts \"$key: $timing($key)\" }",
          "D. foreach (i=0; i<10; i++) { puts $i }"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 51: foreach hỗ trợ duyệt danh sách, duyệt cặp name-value, và duyệt các khóa mảng. Cú pháp D là cú pháp vòng lặp for của ngôn ngữ C, không phải foreach của Tcl.",
        theoryRef: "Chương 4 - Mục 3: foreach"
      },
      {
        id: 220,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Xét đoạn mã: 'if {[catch {exec dc_shell -f run.tcl} out]} { puts \"FAIL: $out\" }'. Biến 'out' sẽ lưu trữ thông tin gì nếu câu lệnh exec gặp lỗi?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Thông điệp báo lỗi chi tiết do hệ điều hành hoặc công cụ dc_shell trả về",
          "B. Luôn lưu giá trị số 0",
          "C. Tự động xóa sạch nội dung",
          "D. Đường dẫn tới file cài đặt phần mềm"
        ],
        correct: [0],
        explanation: "Theo Slide 58: Khi `catch` bắt được ngoại lệ (trả về khác 0), biến kết quả (ở đây là `out`) sẽ lưu thông điệp lỗi (error message).",
        theoryRef: "Chương 4 - Mục 5: Bắt lỗi với catch"
      },

      // --- CHƯƠNG 5 (CÂU 221-225) ---
      {
        id: 221,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Cho chuỗi 'set text \"Hello World\"'. Câu lệnh nào sau đây trích xuất được đúng từ 'Hello' (5 ký tự đầu tiên)?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. [string range $text 0 4]",
          "B. [string range $text 1 5]",
          "C. [string index $text 0 4]",
          "D. [string sub $text 0 5]"
        ],
        correct: [0],
        explanation: "Theo Slide 66: Vì chỉ số trong Tcl bắt đầu từ 0, các ký tự của 'Hello' có chỉ số 0, 1, 2, 3, 4. Do đó lệnh đúng là `[string range $text 0 4]`.",
        theoryRef: "Chương 5 - Mục 1: Thao tác Chuỗi"
      },
      {
        id: 222,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "multi",
        question: "Khi sử dụng biểu thức chính quy (Regular Expressions) trong Tcl, những ký hiệu nào sau đây có ý nghĩa CHÍNH XÁC?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. \\w đại diện cho ký tự từ (chữ cái a-z, A-Z, chữ số 0-9, và dấu gạch dưới _)",
          "B. \\s đại diện cho một ký tự khoảng trắng (space, tab, newline)",
          "C. Cặp dấu ngoặc đơn (...) tạo capture group để bóc tách dữ liệu vào biến",
          "D. Ký hiệu '^' luôn đại diện cho việc kết thúc dòng văn bản"
        ],
        correct: [0, 1, 2],
        explanation: "Theo bảng Regex Slide 71: `\\w` (ký tự từ), `\\s` (khoảng trắng), `(...)` (capture group). D sai vì `^` là đầu dòng, `$` mới là cuối dòng.",
        theoryRef: "Chương 5 - Mục 3: Regex patterns"
      },
      {
        id: 223,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Xét câu lệnh: 'scan \"temp=25.5, voltage=3.3\" \"temp=%f, voltage=%f\" t v'. Giá trị trả về của câu lệnh scan này là bao nhiêu?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. 2 (vì đã bóc tách thành công 2 trường dữ liệu vào biến t và v)",
          "B. 25.5",
          "C. 0",
          "D. true"
        ],
        correct: [0],
        explanation: "Theo Slide 69: Lệnh `scan` trả về số lượng trường dữ liệu được gán thành công vào các biến đích. Ở đây có 2 biến `t` và `v` nên kết quả là 2.",
        theoryRef: "Chương 5 - Mục 2: format và scan"
      },
      {
        id: 224,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "multi",
        question: "Những kỹ thuật nào sau đây được xem là Best Practice khi thao tác với tệp tin (File I/O) trong kịch bản Tcl?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Luôn luôn bọc thao tác mở file 'open' trong cấu trúc 'catch' để xử lý khi file không tồn tại",
          "B. Luôn luôn gọi lệnh 'close $fid' sau khi kết thúc quá trình đọc/ghi để giải phóng tài nguyên",
          "C. Khi đọc các file log report khổng lồ, ưu tiên đọc từng dòng bằng 'while {[gets $fid line] >= 0}' để tiết kiệm RAM",
          "D. Sau khi mở file bằng 'open', tuyệt đối không được gọi lệnh 'close'"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 74, 75, 79: 'Best practice: Luôn catch khi mở file, luôn close', và đọc từng dòng bằng `while {[gets $fid line] >= 0}` để tránh tràn bộ nhớ RAM.",
        theoryRef: "Chương 5 - Mục 4: File I/O"
      },
      {
        id: 225,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Biểu thức chính quy nào sau đây kiểm tra một chuỗi có phải là tên tín hiệu Verilog hợp lệ (bắt đầu bằng chữ cái, theo sau là chữ cái, số hoặc dấu gạch dưới)?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. ^[a-zA-Z]\\w*$",
          "B. ^\\d\\w*$",
          "C. *[0-9]*",
          "D. [a-z]?"
        ],
        correct: [0],
        explanation: "Theo Slide 70: 'Validate ten tin hieu: regexp {^[a-zA-Z]\\w*$} \"data_bus\"'. Bắt đầu bằng chữ cái `[a-zA-Z]`, theo sau bởi 0 hoặc nhiều ký tự từ `\\w*` đến hết dòng `$`. ",
        theoryRef: "Chương 5 - Mục 3: regexp"
      },

      // --- CHƯƠNG 6 (CÂU 226-230) ---
      {
        id: 226,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong Synopsys Design Compiler, sau khi hoàn thành quá trình tổng hợp, câu lệnh Tcl nào dùng để xuất file ràng buộc định thời chuẩn công nghiệp?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. write_sdc design.sdc",
          "B. export_timing design.sdc",
          "C. save_constraints design.sdc",
          "D. write -format sdc"
        ],
        correct: [0],
        explanation: "Theo Slide 78, 85, 86: Câu lệnh chuẩn để xuất ràng buộc định thời trong Design Compiler là `write_sdc ${DESIGN_NAME}.sdc`.",
        theoryRef: "Chương 6 - Mục 3: Design Compiler synthesis cơ bản"
      },
      {
        id: 227,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Trong phân tích thời gian tĩnh STA với PrimeTime, các đường truyền tín hiệu bị vi phạm thường được phân loại thành những nhóm nào để ưu tiên xử lý?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. reg2reg (Đường truyền giữa 2 flip-flop nội bộ)",
          "B. in2reg (Đường truyền từ cổng vào ngoại vi tới flip-flop)",
          "C. reg2out (Đường truyền từ flip-flop tới cổng ra ngoại vi)",
          "D. cloud2ground (Đường truyền phóng điện sấm sét)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 89: 'Phân loại path: reg2reg, reg2out, in2reg — ưu tiên fix worst slack trước'. D là phương án gây nhiễu hài hước.",
        theoryRef: "Chương 6 - Mục 4: PrimeTime debug violations"
      },
      {
        id: 228,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong luồng Place & Route trên Cadence Innovus, giai đoạn CTS (Clock Tree Synthesis) thực hiện nhiệm vụ cốt lõi nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Xây dựng mạng lưới cây đệm phân phối xung nhịp để cân bằng độ trễ (delay) và giảm thiểu độ lệch pha (clock skew)",
          "B. Định vị các cổng logic AND/OR lên khung silicon",
          "C. Chuyển đổi mã C++ sang mã Verilog",
          "D. Nén file layout thành file nén zip"
        ],
        correct: [0],
        explanation: "Theo Slide 82, 90, 91: CTS (Clock Tree Synthesis) là giai đoạn dựng cây xung nhịp (thực thi qua lệnh `clock_design`), chèn các bộ đệm clock buffer để tín hiệu clock đến mọi flip-flop đồng thời.",
        theoryRef: "Chương 6 - Mục 5: Innovus PnR Flow"
      },
      {
        id: 229,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Những bước nào sau đây phản ánh ĐÚNG quy trình thực thi trên công cụ Xilinx Vivado cho chip FPGA bằng kịch bản Tcl?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. create_project khởi tạo dự án và add_files nạp mã nguồn RTL",
          "B. launch_runs synth_1 chạy tổng hợp logic FPGA",
          "C. launch_runs impl_1 -to_step write_bitstream xuất file cấu hình bitstream nạp lên chip",
          "D. format c: để xóa sạch ổ đĩa hệ điều hành"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 92: Quy trình Vivado Tcl flow gồm: `create_project`, `add_files`, `launch_runs synth_1`, `launch_runs impl_1`, `report_timing_summary`, và `write_bitstream`.",
        theoryRef: "Chương 6 - Mục 5: Vivado FPGA flow"
      },
      {
        id: 230,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Định dạng file xuất ra cuối cùng của luồng Physical Design (PnR) chứa đầy đủ thông tin vị trí linh kiện và đường dây định tuyến để chuyển tiếp sang kiểm tra DRC/LVS là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. DEF (Design Exchange Format) / GDSII",
          "B. DOCX (Microsoft Word)",
          "C. MP3 Audio File",
          "D. HTML Webpage"
        ],
        correct: [0],
        explanation: "Theo Slide 90, 91: Lệnh `write_def ${DESIGN_NAME}_pnr.def` và xuất GDS để tiến hành kiểm tra DRC (Design Rule Checking) và LVS (Layout Versus Schematic).",
        theoryRef: "Chương 6 - Mục 5: Innovus PnR Flow"
      }
    ]
  },

  exam_3: {
    id: "exam_3",
    title: "Đề 3: Cú pháp Chuyên sâu Tcl & Shell Scripting",
    description: "Bộ đề 30 câu đi sâu vào chi tiết kỹ thuật lập trình: Quoting rules, String manipulation, Regex capture groups, upvar call-by-reference, catch handling, file I/O modes và kiến trúc Unified Automation.",
    questions: [
      // --- CHƯƠNG 1 (CÂU 301-305) ---
      {
        id: 301,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Lý do vì sao ngôn ngữ Perl đang có xu hướng GIẢM DẦN trong các dự án thiết kế vi mạch mới?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Cú pháp phức tạp, khó đọc và khó bảo trì khi dự án có quy mô lớn",
          "B. Perl không hỗ trợ xử lý biểu thức chính quy (Regex)",
          "C. Perl không thể chạy được trên hệ điều hành Linux",
          "D. Perl đòi hỏi phải mua bản quyền đắt tiền hơn Tcl"
        ],
        correct: [0],
        explanation: "Theo Slide 9: Nhược điểm của Perl là 'Khó đọc, khó bảo trì', trong khi Python trực quan hơn và có kho thư viện khổng lồ nên Perl đang có xu hướng giảm dần.",
        theoryRef: "Chương 1 - Mục 4: So sánh ngôn ngữ scripting"
      },
      {
        id: 302,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Những công đoạn nào sau đây thuộc về pha Backend / Physical Design trong quy trình vi mạch?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Floorplanning & Power planning",
          "B. Clock Tree Synthesis (CTS)",
          "C. Routing & Physical Verification Signoff",
          "D. Functional Verification với UVM testbench"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 5: Backend gồm Floorplanning, Placement, CTS, Routing, Signoff. Functional Verification thuộc về pha Frontend.",
        theoryRef: "Chương 1 - Mục 1: Quy trình thiết kế vi mạch"
      },
      {
        id: 303,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Ngôn ngữ kịch bản nào được xem là chuẩn giao diện tương tác duy nhất được tích hợp sẵn trong nhân của tất cả các công cụ EDA của Synopsys, Cadence và Xilinx?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Tcl",
          "B. Java",
          "C. PHP",
          "D. Ruby"
        ],
        correct: [0],
        explanation: "Theo Slide 26, 83: 'Tcl là ngôn ngữ native của Design Compiler, Innovus, Vivado, ICC2, PrimeTime, Genus, Tempus'.",
        theoryRef: "Chương 1 - Mục 4 & Chương 6"
      },
      {
        id: 304,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "multi",
        question: "Tại sao kiểm thử hồi quy (Regression Testing) được ví như 'xương sống' của quy trình đảm bảo chất lượng (QA) vi mạch?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Giúp phát hiện sớm các lỗi phát sinh (bugs) ngay sau khi có chỉnh sửa trong RTL",
          "B. Đảm bảo chất lượng ổn định sau mỗi commit mã nguồn của các kỹ sư trong nhóm",
          "C. Giúp kỹ sư tự tin tái cấu trúc mã (refactor) mà không sợ làm hỏng các tính năng cũ",
          "D. Tự động khắc phục các lỗi vật lý trên tấm silicon wafer khi sản xuất"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 8, 11: Lợi ích của regression: phát hiện lỗi sớm, đảm bảo chất lượng sau commit, tăng tốc refactor. D sai vì kịch bản regression không can thiệp chế tạo vật lý wafer.",
        theoryRef: "Chương 1 - Mục 3: Regression Testing"
      },
      {
        id: 305,
        chapter: 1,
        chapterTitle: "Chương 1: Tổng quan tự động hóa vi mạch",
        type: "single",
        question: "Triết lý kinh điển của hệ điều hành Linux/Unix là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. 'Everything is a file' (Mọi thứ đều là tệp tin)",
          "B. 'Everything is an object' (Mọi thứ là đối tượng)",
          "C. 'GUI is always superior' (Giao diện đồ họa luôn vượt trội)",
          "D. 'No command line needed' (Không cần dòng lệnh)"
        ],
        correct: [0],
        explanation: "Theo Slide 10: 'Everything is a file — pipes, redirection, scripting'. Mọi thiết bị, tiến trình, socket đều được trừu tượng hóa dưới dạng file.",
        theoryRef: "Chương 1 - Mục 5: Môi trường Linux"
      },

      // --- CHƯƠNG 2 (CÂU 306-310) ---
      {
        id: 306,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Trong kịch bản Bash, câu lệnh 'PROJECT=$1' có ý nghĩa gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Gán giá trị của đối số dòng lệnh thứ nhất truyền vào script cho biến PROJECT",
          "B. So sánh biến PROJECT với số 1",
          "C. In giá trị 1 ra màn hình terminal",
          "D. Xóa biến PROJECT khỏi hệ thống"
        ],
        correct: [0],
        explanation: "Theo Slide 20, 22: Trong Bash, `$0` là tên file script, `$1` là tham số thứ nhất truyền vào, `$2` là tham số thứ hai.",
        theoryRef: "Chương 2 - Mục 4: Biến và tham số Bash"
      },
      {
        id: 307,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Trong cú pháp Bash script, những câu lệnh điều kiện và vòng lặp nào sau đây là ĐÚNG chuẩn?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. if [ $SLACK -lt 0 ]; then ... fi  (So sánh số nguyên nhỏ hơn)",
          "B. for file in rtl/*.v; do ... done  (Duyệt danh sách file Verilog)",
          "C. case $MODE in synth) ... ;; sim) ... ;; esac  (Cấu trúc case)",
          "D. if ($SLACK < 0) then ... endif  (Cú pháp Bash chuẩn)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 20, 21: Bash sử dụng `if [ ... ]; then ... fi`, `case ... in ... esac`, và `for ... in ... do ... done`. Phương án D là cú pháp của C-shell (csh), không phải Bash.",
        theoryRef: "Chương 2 - Mục 4: Cú pháp Bash script"
      },
      {
        id: 308,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Câu lệnh nào sau đây dùng sed để thay thế TẤT CẢ các chuỗi 'clk_old' thành 'clk_new' trong file netlist.v?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. sed 's/clk_old/clk_new/g' netlist.v",
          "B. sed 'replace clk_old with clk_new' netlist.v",
          "C. sed 'clk_old -> clk_new' netlist.v",
          "D. grep 's/clk_old/clk_new/g' netlist.v"
        ],
        correct: [0],
        explanation: "Theo Slide 19: Cú pháp chuẩn của lệnh stream editor `sed` là `sed s/old/new/g`. Cờ `g` (global) để thay thế toàn bộ các lần xuất hiện.",
        theoryRef: "Chương 2 - Mục 3: Text processing với sed"
      },
      {
        id: 309,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "multi",
        question: "Những lệnh nào sau đây trong Linux thuộc nhóm điều hướng và quản trị tệp tin cơ bản?",
        badge: "☑️ Chọn 4 đáp án đúng",
        options: [
          "A. pwd (In đường dẫn thư mục hiện tại)",
          "B. cd (Chuyển đổi thư mục làm việc)",
          "C. mkdir -p (Tạo thư mục kèm cây thư mục cha nếu chưa có)",
          "D. rm -i (Xóa tệp tin có hỏi xác nhận an toàn)",
          "E. synth_chip (Lệnh có sẵn trong nhân Linux kernel)"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Theo Slide 17: 'Lệnh thiết yếu: pwd, cd, ls -la, mkdir -p, cp -r, mv, rm -i, ln -s'. Lệnh synth_chip không phải lệnh Linux có sẵn.",
        theoryRef: "Chương 2 - Mục 1: Lệnh điều hướng Linux"
      },
      {
        id: 310,
        chapter: 2,
        chapterTitle: "Chương 2: Làm việc với Shell Bash trong Linux",
        type: "single",
        question: "Dòng đầu tiên '#!/bin/bash' trong tệp kịch bản được gọi là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Shebang (chỉ định trình thông dịch thực thi file)",
          "B. Comment thông thường bị bỏ qua hoàn toàn",
          "C. Lệnh biên dịch C++",
          "D. Tên tác giả viết script"
        ],
        correct: [0],
        explanation: "Theo Slide 22, 23: Dòng `#!/bin/bash` là Shebang, báo cho Linux kernel biết cần nạp trình thông dịch nào (`/bin/bash`) để chạy tệp kịch bản này.",
        theoryRef: "Chương 2 - Mục 4: Best practices"
      },

      // --- CHƯƠNG 3 (CÂU 311-315) ---
      {
        id: 311,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Xét mã lệnh Tcl sau:\nset name \"World\"\nset g3 {Hello $name}\nGiá trị của biến g3 sau câu lệnh là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Hello $name (nguyên văn chuỗi, không thay thế)",
          "B. Hello World",
          "C. Hello",
          "D. Lỗi cú pháp"
        ],
        correct: [0],
        explanation: "Theo Slide 29: 'Braces: giữ nguyên văn: set g3 {Hello $name} ;# Hello $name'. Dấu ngoặc nhọn `{}` ngăn chặn hoàn toàn việc thay thế biến `$name`.",
        theoryRef: "Chương 3 - Mục 3: Quotes so với Braces"
      },
      {
        id: 312,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "multi",
        question: "Những thao tác sửa đổi danh sách List nào sau đây trong Tcl là CHÍNH XÁC?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. lappend fruits kiwi  (Thêm 'kiwi' vào cuối list fruits)",
          "B. linsert $nums 2 3   (Chèn giá trị 3 vào vị trí chỉ số 2)",
          "C. lreplace $colors 1 2 purple pink (Thay thế các phần tử từ chỉ số 1 đến 2)",
          "D. list.append('kiwi')  (Cú pháp Tcl chuẩn để thêm phần tử)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 35: Các thao tác sửa đổi list gồm: `lappend`, `linsert`, `lreplace`. D là cú pháp của ngôn ngữ Python, không phải Tcl.",
        theoryRef: "Chương 3 - Mục 5: Truy xuất và sửa list"
      },
      {
        id: 313,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Trong Tcl, khi muốn viết chú thích (comment) trên CÙNG MỘT DÒNG với câu lệnh, ta phải làm như thế nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Phải có dấu chấm phẩy trước dấu thăng, ví dụ: set x 10 ;# comment",
          "B. Chỉ cần gõ dấu thăng trực tiếp: set x 10 # comment",
          "C. Dùng cặp dấu // như trong C++",
          "D. Không thể viết comment cùng dòng trong Tcl"
        ],
        correct: [0],
        explanation: "Theo Slide 27: 'Comment # phải ở đầu command (inline: ;#)'. Nếu không có dấu `;`, Tcl sẽ coi `#` và các từ phía sau là đối số của lệnh `set`.",
        theoryRef: "Chương 3 - Mục 1: Cấu trúc lệnh Tcl"
      },
      {
        id: 314,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "multi",
        question: "Các tùy chọn nào sau đây của lệnh lsort trong Tcl được sử dụng ĐÚNG chức năng?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. lsort -integer $n (Sắp xếp theo thứ tự số nguyên tăng dần)",
          "B. lsort -integer -decreasing $n (Sắp xếp theo thứ tự số nguyên giảm dần)",
          "C. lsort -ascii -nocase $list (Sắp xếp theo bảng chữ cái không phân biệt hoa thường)",
          "D. lsort -random (Sắp xếp ngẫu nhiên)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 36: Lệnh `lsort` hỗ trợ các cờ `-integer`, `-decreasing`, `-ascii`, `-nocase`. Không có cờ `-random` trong lệnh lsort chuẩn của Tcl.",
        theoryRef: "Chương 3 - Mục 5: lsort"
      },
      {
        id: 315,
        chapter: 3,
        chapterTitle: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
        type: "single",
        question: "Để kiểm tra xem một biến 'counter' đã được định nghĩa và tồn tại hay chưa trong Tcl, ta dùng lệnh nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. [info exists counter]",
          "B. [is_defined counter]",
          "C. [variable_exists counter]",
          "D. [check counter]"
        ],
        correct: [0],
        explanation: "Theo Slide 31: Lệnh chuẩn trong Tcl để kiểm tra biến tồn tại là: `if {[info exists counter]} { ... }`.",
        theoryRef: "Chương 3 - Mục 1: Biến set, unset, info exists"
      },

      // --- CHƯƠNG 4 (CÂU 316-320) ---
      {
        id: 316,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Trong câu lệnh switch của Tcl, kỹ thuật nào cho phép nhiều pattern khác nhau áp dụng chung MỘT khối hành động?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Sử dụng ký tự gạch nối '-' ở các pattern phía trước (ví dụ: \"*.v\" - \"*.sv\" { action })",
          "B. Dùng từ khóa 'or' giữa các pattern",
          "C. Dùng dấu phẩy phân tách các pattern",
          "D. Không thể gộp nhiều pattern trong switch"
        ],
        correct: [0],
        explanation: "Theo Slide 50: 'Nhieu pattern, cung action: switch -glob $filename { \"*.v\" - \"*.sv\" - \"*.vh\" { puts \"HDL source\" } }'. Dấu gạch ngang `-` đại diện cho việc fall-through sang khối hành động kế tiếp.",
        theoryRef: "Chương 4 - Mục 2: switch phân loại file"
      },
      {
        id: 317,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "multi",
        question: "Về phạm vi biến (Scope) trong Tcl, những phát biểu nào sau đây là CHÍNH XÁC?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Biến tạo bên ngoài mọi proc có phạm vi toàn cục (global scope)",
          "B. Biến tạo bên trong proc mặc định là cục bộ (local scope), biến mất khi hàm kết thúc",
          "C. Dùng từ khóa 'global var_name' bên trong proc để truy cập và sửa đổi biến toàn cục",
          "D. Tcl tự động đồng bộ hóa tất cả biến local vào global mà không cần bất kỳ từ khóa nào"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 57: Tcl phân biệt rạch ròi giữa global scope và local scope. Cần dùng `global` để tham chiếu biến toàn cục trong hàm. D sai.",
        theoryRef: "Chương 4 - Mục 5: Scope global và upvar"
      },
      {
        id: 318,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Xét định nghĩa thủ tục:\nproc run_synthesis {design {clock_period 10}} { ... }\nNếu ta gọi 'run_synthesis alu', tham số clock_period sẽ nhận giá trị là bao nhiêu?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. 10 (giá trị mặc định)",
          "B. 0",
          "C. null",
          "D. Báo lỗi vì thiếu tham số thứ hai"
        ],
        correct: [0],
        explanation: "Theo Slide 56: Cú pháp `{clock_period 10}` gán giá trị mặc định là 10. Khi gọi `run_synthesis alu`, vì không truyền đối số thứ 2 nên `clock_period` tự động nhận giá trị 10.",
        theoryRef: "Chương 4 - Mục 4: Tham số mặc định"
      },
      {
        id: 319,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "multi",
        question: "Những lý do nào khiến việc sử dụng lệnh 'catch' là cực kỳ quan trọng trong các kịch bản tự động hóa EDA?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. Tránh việc toàn bộ kịch bản chạy đêm (batch/regression) bị dừng đột ngột chỉ vì một file thiết kế lỗi",
          "B. Cho phép ghi nhận thông báo lỗi vào log và tiếp tục thực thi các bài test tiếp theo",
          "C. Cung cấp phương án dự phòng (fallback solution) khi công cụ bên ngoài không khởi chạy được",
          "D. Đảm bảo chip không bao giờ bị vi phạm thời gian trên silicon"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 58: 'Mục đích: Bắt lỗi runtime, tránh script dừng đột ngột, có phương án fallback'. D sai vì catch chỉ quản lý lỗi phần mềm kịch bản.",
        theoryRef: "Chương 4 - Mục 5: Error handling với catch"
      },
      {
        id: 320,
        chapter: 4,
        chapterTitle: "Chương 4: Điều khiển luồng và thủ tục Tcl",
        type: "single",
        question: "Trong vòng lặp for của Tcl: 'for {set i 0} {$i < 5} {incr i} { puts $i }', bước tăng giá trị biến đếm 'incr i' tương đương với phép toán nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. i = i + 1",
          "B. i = i * 2",
          "C. i = 0",
          "D. i = i - 1"
        ],
        correct: [0],
        explanation: "Theo Slide 52: Lệnh `incr i` trong Tcl tăng giá trị của biến nguyên `i` lên 1 đơn vị (`i = i + 1`).",
        theoryRef: "Chương 4 - Mục 3: for và while"
      },

      // --- CHƯƠNG 5 (CÂU 321-325) ---
      {
        id: 321,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Lệnh 'string compare $a $b' trong Tcl trả về giá trị gì khi hai chuỗi a và b hoàn toàn giống hệt nhau?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. 0",
          "B. 1",
          "C. -1",
          "D. true"
        ],
        correct: [0],
        explanation: "Theo Slide 68: `string compare` hoạt động tương tự hàm `strcmp` trong C: trả về 0 nếu 2 chuỗi bằng nhau, khác 0 nếu khác nhau.",
        theoryRef: "Chương 5 - Mục 1: replace, compare, equal"
      },
      {
        id: 322,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "multi",
        question: "Những hàm nào sau đây trong Tcl được sử dụng để đọc hoặc ghi dữ liệu với tệp tin (File I/O)?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. gets (Đọc một dòng từ file đang mở)",
          "B. read (Đọc toàn bộ nội dung file)",
          "C. puts (Ghi một chuỗi dữ liệu vào file)",
          "D. scan_file_system (Lệnh format ổ cứng)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 74, 75: Ba lệnh File I/O cơ bản là `gets` (đọc từng dòng), `read` (đọc toàn bộ), và `puts $fid` (ghi dữ liệu).",
        theoryRef: "Chương 5 - Mục 4: gets, puts, read"
      },
      {
        id: 323,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Cho câu lệnh regsub: 'regsub -all {\\s+} $str \" \" cleaned'. Biểu thức regex '{\\s+}' có ý nghĩa gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Khớp một hoặc nhiều ký tự khoảng trắng liên tiếp để thay thế thành một khoảng trắng duy nhất",
          "B. Khớp tất cả các chữ số từ 0 đến 9",
          "C. Khớp tất cả các dấu chấm phẩy",
          "D. Xóa tất cả các chữ cái viết hoa"
        ],
        correct: [0],
        explanation: "Theo Slide 71, 73: `\\s` là ký tự khoảng trắng, `+` là lặp lại 1 hoặc nhiều lần. Do đó `{\\s+}` khớp các khoảng trắng liên tiếp để chuẩn hóa thành 1 dấu cách duy nhất.",
        theoryRef: "Chương 5 - Mục 3: regsub"
      },
      {
        id: 324,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "multi",
        question: "Các đặc tả định dạng nào sau đây của lệnh 'format' trong Tcl là ĐÚNG chuẩn?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. %s - Định dạng chuỗi ký tự (String)",
          "B. %d - Định dạng số nguyên (Integer)",
          "C. %.2f - Định dạng số thực có 2 chữ số sau dấu phẩy (Floating-point)",
          "D. %zip - Tự động nén tệp tin"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 69: Lệnh `format` kế thừa từ `printf` của C với `%s`, `%d`, `%.2f`, `%e`. Không có đặc tả `%zip`.",
        theoryRef: "Chương 5 - Mục 2: format và scan"
      },
      {
        id: 325,
        chapter: 5,
        chapterTitle: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
        type: "single",
        question: "Trong Tcl, khi đọc từng dòng của file bằng vòng lặp 'while {[gets $fid line] >= 0}', giá trị trả về của '[gets $fid line]' khi đã đọc tới CUỐI TỆP (EOF) là gì?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. -1",
          "B. 0",
          "C. null",
          "D. false"
        ],
        correct: [0],
        explanation: "Theo Slide 52, 75: `gets $fid line` trả về số lượng ký tự đọc được của dòng; khi gặp cuối tệp tin (End of File - EOF), lệnh trả về `-1`. Do đó điều kiện dừng là `< 0`.",
        theoryRef: "Chương 5 - Mục 4: gets đọc từng dòng"
      },

      // --- CHƯƠNG 6 (CÂU 326-330) ---
      {
        id: 326,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong quy trình tổng hợp logic Synopsys Design Compiler, câu lệnh nào được dùng để thiết lập xung nhịp với chu kỳ 10.0 ns cho cổng 'clk'?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. create_clock -name clk -period 10.0 [get_ports clk]",
          "B. set_clock 10.0 clk",
          "C. clock_define -period 10 clk",
          "D. define_clock -name clk 10ns"
        ],
        correct: [0],
        explanation: "Theo Slide 30, 85: Câu lệnh SDC chuẩn được hỗ trợ trong DC là: `create_clock -name clk -period 10.0 [get_ports clk]`.",
        theoryRef: "Chương 6 - Mục 3: DC constraints"
      },
      {
        id: 327,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Những câu lệnh nào sau đây trong Synopsys PrimeTime được dùng để phân tích và báo cáo vi phạm định thời?",
        badge: "☑️ Chọn 3 đáp án đúng",
        options: [
          "A. report_timing -delay_type max (Báo cáo vi phạm Setup time)",
          "B. report_timing -delay_type min (Báo cáo vi phạm Hold time)",
          "C. report_constraint -all_violators (Báo cáo toàn bộ vi phạm ràng buộc)",
          "D. delete_all_violators (Lệnh xóa các vi phạm mà không cần sửa thiết kế)"
        ],
        correct: [0, 1, 2],
        explanation: "Theo Slide 88: Các lệnh phân tích định thời của PrimeTime gồm: `report_timing -delay_type max`, `report_timing -delay_type min`, và `report_constraint -all_violators`. Không có lệnh D.",
        theoryRef: "Chương 6 - Mục 4: PrimeTime STA"
      },
      {
        id: 328,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong một khung kịch bản kiểm thử hồi quy (Regression Testing Framework), tỷ lệ phần trăm bài test thành công (Pass Rate) được tính toán theo công thức Tcl nào?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. [expr {$pass * 100.0 / ($pass + $fail)}]%",
          "B. [expr {$pass / $fail}]%",
          "C. [expr {$pass * 100}]%",
          "D. [expr {$fail * 100 / $pass}]%"
        ],
        correct: [0],
        explanation: "Theo Slide 94: 'Rate=[expr {$pass*100.0/($pass+$fail)}]%'. Đây là công thức chuẩn tính tỷ lệ phần trăm số testcase pass trên tổng số testcase đã chạy.",
        theoryRef: "Chương 6 - Mục 6: Regression testing framework"
      },
      {
        id: 329,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "multi",
        question: "Kỹ thuật 'Unified Multi-Tool Flow' trong Slide 93 đề xuất việc sử dụng câu lệnh switch để điều phối các công cụ EDA nào sau đây?",
        badge: "☑️ Chọn 4 đáp án đúng",
        options: [
          "A. \"dc\" -> Gọi script chạy Synopsys Design Compiler (dc_synth.tcl)",
          "B. \"pt\" -> Gọi script chạy Synopsys PrimeTime (pt_timing.tcl)",
          "C. \"innovus\" -> Gọi script chạy Cadence Innovus (innovus_pnr.tcl)",
          "D. \"vivado\" -> Gọi script chạy AMD/Xilinx Vivado (vivado_impl.tcl)",
          "E. \"photoshop\" -> Gọi script chỉnh sửa ảnh"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Theo Slide 93: Hàm `run_full_flow {design tool}` dùng `switch $tool` để điều phối `dc`, `pt`, `innovus`, và `vivado`. Cả 4 công cụ đều chính xác.",
        theoryRef: "Chương 6 - Mục 6: Unified multi-tool flow"
      },
      {
        id: 330,
        chapter: 6,
        chapterTitle: "Chương 6: Tích hợp EDA tools với Tcl",
        type: "single",
        question: "Trong kịch bản Design Compiler ở Slide 86, nguyên tắc Best Practice nào được khuyến nghị để kịch bản có tính tái sử dụng cao nhất?",
        badge: "🔘 Chọn 1 đáp án đúng",
        options: [
          "A. Tách toàn bộ các biến cấu hình (như DESIGN_NAME, CLK_PERIOD) ra đầu script hoặc file config riêng",
          "B. Ghi cứng trực tiếp tên module vào mọi câu lệnh",
          "C. Không bao giờ xuất file netlist sau tổng hợp",
          "D. Chạy tổng hợp không cần đặt ràng buộc xung nhịp"
        ],
        correct: [0],
        explanation: "Theo Slide 86: 'Best practice: Tách biến cấu hình (DESIGN_NAME, CLK_PERIOD) ra đầu script' giúp kịch bản dễ cấu hình, dễ bảo trì và có thể tái sử dụng cho nhiều dự án khác nhau.",
        theoryRef: "Chương 6 - Mục 3: DC flow"
      }
    ]
  }
};

// Flatten pool for Random Exam generation
const ALL_QUESTIONS_POOL = [
  ...EXAM_SETS.exam_1.questions,
  ...EXAM_SETS.exam_2.questions,
  ...EXAM_SETS.exam_3.questions
];
