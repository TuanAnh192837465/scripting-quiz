// Dữ liệu lý thuyết trọng tâm 6 Chương - Giáo trình Lập trình Script (Tác giả: Nguyễn Duy Nhật Viễn, ĐHBK Đà Nẵng)
const THEORY_DATA = [
  {
    id: 1,
    title: "Chương 1: Tổng quan tự động hóa thiết kế vi mạch",
    icon: "cpu",
    summary: "Hiểu quy trình thiết kế vi mạch (IC Design Flow), nhận diện hạn chế của GUI, thiết lập tư duy Script-First, nắm bản chất kiểm thử hồi quy (Regression Testing) và phân biệt vai trò của các ngôn ngữ kịch bản.",
    sections: [
      {
        heading: "1. Quy trình thiết kế vi mạch (IC Design Flow)",
        content: `Quy trình thiết kế vi mạch phân tách làm 2 pha lớn tạo ra hàng triệu dòng dữ liệu văn bản:`,
        bullets: [
          "<strong>Frontend (Thiết kế chức năng):</strong> RTL Design (mô tả Verilog/VHDL/SystemVerilog) → Functional Verification (kiểm tra chức năng, mô phỏng testbench) → Logic Synthesis (tổng hợp RTL thành cổng logic).",
          "<strong>Backend / Physical Design (Thiết kế vật lý):</strong> Floorplanning (quy hoạch mặt bằng, lưới nguồn) → Placement (định vị cell) → Clock Tree Synthesis (CTS - dựng cây xung nhịp) → Routing (định tuyến dây) → Signoff (xác thực DRC/LVS/Timing trước tape-out)."
        ]
      },
      {
        heading: "2. Hạn chế của GUI & Tư duy Script-First",
        content: `Trong môi trường công nghiệp vi mạch, thao tác thủ công trên giao diện đồ họa (GUI) bộc lộ nhiều điểm yếu chí mạng:`,
        bullets: [
          "<strong>Không tái tạo được (Non-reproducible):</strong> Rất khó lặp lại chính xác chuỗi hàng chục bước bấm nút, chọn tham số trên giao diện.",
          "<strong>Không thể mở rộng (Scalability):</strong> Không thể click tay cho hàng nghìn test cases hoặc lặp lại cho 50 khối module (Ví dụ: GUI tổng hợp 50 module mất 250 phút; dùng script viết 30 phút + chạy chỉ 10 phút).",
          "<strong>Không tích hợp được CI/CD:</strong> Không thể tự động kích hoạt chạy kiểm thử liên tục trong pipeline đêm hoặc cluster máy chủ tính toán.",
          "<strong>Quy tắc vàng:</strong> <em>Làm việc gì lặp lại nhiều hơn 2 lần → lập tức viết script!</em> Chuyển từ tư duy 'Click menu nào?' sang 'Lệnh nào thực hiện? Đưa vào script ra sao?'."
        ]
      },
      {
        heading: "3. Kiểm thử hồi quy (Regression Testing)",
        content: `Định nghĩa: Chạy lại toàn bộ hoặc một tập hợp lớn các bài kiểm tra (test cases) sau mỗi lần sửa đổi thiết kế RTL hoặc nâng cấp phiên bản công cụ.`,
        bullets: [
          "Phát hiện lỗi suy thoái (regression bugs) từ sớm, đảm bảo chất lượng sau từng commit mã nguồn.",
          "Tăng tốc quá trình tái cấu trúc mã (refactoring) mà không lo làm hỏng tính năng đã chạy đúng.",
          "Test cases được coi là <strong>tài liệu sống (living documentation)</strong> mô tả chính xác hành vi hệ thống.",
          "Thực tế công nghiệp: chạy hơn <strong>100.000 test cases mỗi ngày</strong> trên hệ thống máy chủ phân tán (Compute Cluster)."
        ]
      },
      {
        heading: "4. So sánh các ngôn ngữ Scripting & Bộ ba quyền lực",
        table: {
          headers: ["Tiêu chí", "Bash", "Tcl", "Python", "Perl"],
          rows: [
            ["Vai trò", "Glue (Keo gắn kết các công cụ)", "EDA Native (Ngôn ngữ điều khiển chuẩn)", "Data Analysis & AI/ML", "Text Processing"],
            ["Ưu điểm", "Tích hợp sâu Linux OS, gọi tool nhanh", "Lệnh chuẩn trong mọi công cụ EDA", "Thư viện phong phú, xử lý dữ liệu mạnh", "Biểu thức chính quy (Regex) rất mạnh"],
            ["Nhược điểm", "Cấu trúc dữ liệu yếu, khó tính toán phức tạp", "Ít thư viện ngoài EDA", "Nặng hơn, tốn tài nguyên hơn Tcl/Bash", "Cú pháp phức tạp, khó đọc, khó bảo trì"],
            ["Xu hướng", "Nền tảng bất biến trên Linux", "Chuẩn công nghiệp EDA (Design Compiler, Innovus, Vivado)", "Tăng trưởng rất mạnh trong kiểm tra & phân tích", "Giảm dần trong các dự án mới"]
          ]
        },
        content: `<strong>Bộ ba quyền lực trong thiết kế vi mạch:</strong> <code>Bash + Tcl + Python</code>.`
      },
      {
        heading: "5. Môi trường phát triển Linux",
        content: `Hệ điều hành tiêu chuẩn công nghiệp là Linux (RHEL, CentOS, Ubuntu). Triết lý cốt lõi Unix: <strong>'Everything is a file'</strong> (mọi thứ đều là tập tin) — kết hợp thông qua pipes (<code>|</code>), redirection (<code>></code>, <code><</code>), và scripting. Các công cụ thiết yếu: Linux shell, Git, Editor (Vim, VS Code, Emacs), Text tools (grep, sed, awk, find).`
      }
    ]
  },
  {
    id: 2,
    title: "Chương 2: Làm việc với Shell Bash trong Linux",
    icon: "terminal",
    summary: "Nắm vững điều hướng hệ thống tệp, phân quyền file bằng chmod/chown, làm chủ các công cụ lọc văn bản (grep, sed, awk), cơ chế chuyển hướng I/O, và lập trình Bash script chuẩn cho IC Design.",
    sections: [
      {
        heading: "1. Cấu trúc thư mục Linux & Cây thư mục Project vi mạch",
        content: `Các đường dẫn hệ thống quan trọng: <code>/home/user/ic_projects/</code> (dự án người dùng), <code>/opt/synopsys/</code>, <code>/opt/cadence/</code> (vị trí cài đặt công cụ EDA thương mại), <code>/tmp/</code> (tệp tạm), <code>/var/log/</code> (nhật ký hệ thống).`,
        bullets: [
          "<strong>Cấu trúc thư mục dự án chuẩn (Standard Project Structure):</strong>",
          "<code>rtl/</code>: Chứa mã nguồn thiết kế phần cứng (.v, .sv, .vhd)",
          "<code>tb/</code>: Chứa testbench mô phỏng",
          "<code>sim/</code>: Thư mục thực thi chạy mô phỏng, log mô phỏng",
          "<code>synth/</code>: Thư mục thực thi tổng hợp logic (logic synthesis)",
          "<code>reports/</code>: Chứa các báo cáo timing, area, power, DRC xuất ra",
          "<code>scripts/</code>: Chứa các kịch bản tự động hóa Bash, Tcl, Python",
          "<code>Makefile</code>: File điều phối biên dịch và chạy luồng tự động"
        ]
      },
      {
        heading: "2. Phân quyền tệp (File Permissions) với chmod",
        content: `Mỗi tệp tin trong Linux có 3 nhóm quyền: Owner (u), Group (g), Others (o). Ba quyền cơ bản gồm Read (r=4), Write (w=2), Execute (x=1).`,
        bullets: [
          "<code>ls -l script.sh</code>: Xem quyền truy cập chi tiết của file.",
          "<code>chmod 755 script.sh</code>: Chủ sở hữu có toàn quyền (rwx = 4+2+1=7), Nhóm và người khác có quyền đọc & thực thi (r-x = 4+0+1=5). Đây là phân quyền tiêu chuẩn cho các file kịch bản và công cụ chạy.",
          "<code>chmod 644 report.txt</code>: Chủ sở hữu có quyền đọc & ghi (rw- = 6), người khác chỉ đọc (r-- = 4).",
          "<code>chmod u+x script.sh</code> hoặc <code>chmod +x script.sh</code>: Thêm quyền thực thi cho file script.",
          "<strong>Best practice:</strong> Mọi kịch bản automation cần được cấp quyền <code>chmod +x</code>."
        ]
      },
      {
        heading: "3. Pipes và Chuyển hướng I/O (Redirection)",
        content: `Cơ chế ghép nối các công cụ mạnh mẽ của Unix:`,
        codeExample: `# Chạy tổng hợp và ghi cả stdout (1) và stderr (2) vào cùng file log:
dc_shell -f run.tcl > log.txt 2>&1

# Đếm tổng số file Verilog trong thư mục dự án:
find . -name "*.v" | wc -l

# Lọc nhanh 10 dòng vi phạm timing đầu tiên:
grep VIOLATION *.rpt | head -10

# Theo dõi trực tiếp tiến trình mô phỏng đang ghi ra file log:
tail -f simulation.log`,
        bullets: [
          "<code>grep -r -i 'pattern' dir/</code>: Tìm kiếm đệ quy (-r) và không phân biệt chữ hoa/thường (-i).",
          "<code>sed 's/old/new/g' file.v</code>: Tìm và thay thế chuỗi tự động theo luồng.",
          "<code>awk '{print $1, $3}' report.txt</code>: Bóc tách và in theo các cột định dạng."
        ]
      },
      {
        heading: "4. Lập trình Bash Scripting cho IC Design",
        content: `Cú pháp cơ bản của Shell Script:`,
        codeExample: `#!/bin/bash
# Best practice cho production: dừng khi có lỗi hoặc biến rỗng
set -euo pipefail

PROJECT=$1
mkdir -p $PROJECT/{rtl,tb,sim,synth,reports,scripts}

# Cấu trúc rẽ nhánh if
if [ $SLACK -lt 0 ]; then
  echo "Timing violation!"
  exit 1
fi

# Duyệt regression runner
for test in testcases/*.tcl; do
  name=$(basename $test .tcl)
  dc_shell -f $test > logs/$name.log 2>&1
  if grep -q "PASS" logs/$name.log; then
    echo "PASS: $name"
  else
    echo "FAIL: $name"
  fi
done`
      }
    ]
  },
  {
    id: 3,
    title: "Chương 3: Cú pháp Tcl và Cấu trúc Dữ liệu Cơ bản",
    icon: "code",
    summary: "Hiểu bản chất Tcl interpreter (mọi thứ là command và string), 3 cơ chế thay thế (substitution), phân biệt triệt để Quotes và Braces, thực hiện toán học với expr, thao tác Lists và mảng Associative Arrays.",
    sections: [
      {
        heading: "1. Tcl Interpreter & Triết lý ngôn ngữ",
        content: `Tcl (Tool Command Language) là ngôn ngữ native chuẩn công nghiệp trong Design Compiler, Innovus, Vivado, PrimeTime.`,
        bullets: [
          "<strong>Mọi thứ trong Tcl đều là Command:</strong> Cấu trúc dòng lệnh luôn có dạng: <code>command arg1 arg2 ...</code>.",
          "<strong>Mọi dữ liệu đều là String:</strong> Từ con số, danh sách, đến thân hàm thực chất đều có biểu diễn chuỗi.",
          "Lệnh phân tách bởi <strong>ký tự xuống dòng (newline)</strong> hoặc <strong>dấu chấm phẩy (;)</strong>.",
          "Comment bắt đầu bằng dấu <code>#</code> và <strong>phải ở đầu câu lệnh</strong>. Nếu muốn comment trên cùng dòng với lệnh, phải có dấu chấm phẩy trước: <code>puts $x ;# Đây là comment</code>."
        ]
      },
      {
        heading: "2. Ba loại thay thế (Three Types of Substitution)",
        bullets: [
          "<strong>Thay thế biến (Variable substitution - <code>$</code>):</strong> <code>set name \"Tcl\"; puts $name</code>",
          "<strong>Thay thế lệnh (Command substitution - <code>[]</code>):</strong> <code>set r [expr 2+3]; puts $r</code>",
          "<strong>Thay thế dấu gạch chéo ngược (Backslash substitution - <code>\\</code>):</strong> <code>puts \"Line1\\nLine2\"</code>, <code>puts \"Tab\\tData\"</code>",
          "<strong>Lồng ghép (Nesting):</strong> <code>set files [glob *.v]; puts \"Found [llength $files] Verilog files\"</code>"
        ]
      },
      {
        heading: "3. Dấu ngoặc kép (Double Quotes \" \") vs Dấu ngoặc nhọn (Braces { })",
        content: `<strong>Điểm then chốt:</strong> Sai khác giữa <code>\"\"</code> và <code>{}</code> là nguồn gốc gây ra 90% lỗi trong kịch bản Tcl EDA!`,
        table: {
          headers: ["Đặc tính", "Dấu ngoặc kép \" \"", "Dấu ngoặc nhọn { }"],
          rows: [
            ["Substitution (Thay thế)", "CÓ: Cho phép thay thế biến $ và lệnh []", "KHÔNG: Giữ nguyên văn bản 100% (Literal raw)"],
            ["Trường hợp sử dụng", "Khi chuỗi có khoảng trắng và CẦN mở rộng biến", "Thân hàm proc, khối lệnh if/while, biểu thức expr an toàn"],
            ["Ví dụ EDA ĐÚNG", "create_clock -period $clock_period [get_ports clk]", "proc my_func {a b} { return [expr {$a + $b}] }"],
            ["Ví dụ EDA SAI", "create_clock -period {$clock_period} ... (LỖI: không giải phóng biến)", "if $x < 0 (không bọc braces dễ bị double substitution)"]
          ]
        }
      },
      {
        heading: "4. Toán học với expr & Best Practice",
        content: `Cú pháp tính toán: <code>set sum [expr {$a + $b}]</code>`,
        bullets: [
          "<strong>Best Practice:</strong> <em>Luôn bọc biểu thức trong dấu ngoặc nhọn <code>expr {$a + $b}</code>!</em> Điều này ngăn chặn việc phân tích thay thế 2 lần (double substitution) và giúp Tcl compiler tối ưu bytecode chạy nhanh hơn đáng kể.",
          "Toán tử hỗ trợ: <code>+ - * / % ** == != < > <= >= && || !</code>.",
          "Ví dụ EDA tính slack và chu kỳ xung nhịp:",
          "<code>set slack [expr {$required_time - $arrival_time}]</code>",
          "<code>set period_ns [expr {1000.0 / $freq_mhz}]</code>"
        ]
      },
      {
        heading: "5. Danh sách (Lists) và Mảng (Arrays)",
        content: `Lists là kiểu dữ liệu then chốt vì công cụ EDA luôn trả về danh sách các cells, nets, pins, ports.`,
        bullets: [
          "<strong>Tạo list:</strong> <code>set modules [list adder multiplier divider]</code> (Khuyến nghị dùng hàm <code>list</code>).",
          "<strong>Truy xuất phần tử:</strong> <code>lindex $modules 0</code> (phần tử đầu), <code>lindex $modules end</code> (phần tử cuối), <code>lrange $modules 1 2</code>.",
          "<strong>Thao tác:</strong> <code>lappend modules shifter</code>, <code>linsert</code>, <code>lreplace</code>, <code>llength $modules</code>.",
          "<strong>Tìm kiếm & Sắp xếp:</strong> <code>lsearch $modules multiplier</code> (trả về index, nếu không có trả về -1), <code>lsort -integer -decreasing $nums</code>.",
          "<strong>Mảng kết hợp (Associative Array):</strong> Lưu dữ liệu theo cặp key-value dạng chuỗi: <code>set timing(setup) \"1.2ns\"; array set power {dynamic 15.5 leakage 2.3}</code>. Các hàm mảng: <code>array names</code>, <code>array size</code>, <code>array get</code>.",
          "<strong>Mảng nhiều chiều giả lập:</strong> Dùng cú pháp khóa gộp: <code>set matrix(0,0) 1; set matrix(0,1) 2</code>."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Chương 4: Điều khiển luồng và thủ tục Tcl",
    icon: "git-branch",
    summary: "Làm chủ cấu trúc điều khiển rẽ nhánh if/elseif/else, switch với khớp mẫu regex/glob, vòng lặp foreach (quan trọng nhất EDA), định nghĩa thủ tục proc với tham số mặc định, quản lý tầm vực global/upvar và bắt lỗi với catch.",
    sections: [
      {
        heading: "1. Cấu trúc rẽ nhánh if / elseif / else",
        content: `Quy tắc bắt buộc trong Tcl: Cả điều kiện và thân khối lệnh đều phải bọc trong cặp ngoặc nhọn <code>{}</code>:`,
        codeExample: `set slack -0.5
if {$slack < 0} {
  puts "ERROR: Timing violation"
  set status "FAIL"
} elseif {$slack < 0.2} {
  puts "WARNING: Marginal timing"
  set status "MARGINAL"
} else {
  puts "OK: Timing met"
  set status "PASS"
}`,
        bullets: [
          "Chú ý: Từ khóa là <code>elseif</code> (viết liền, không có khoảng trắng như <code>else if</code>).",
          "Dấu mở ngoặc nhọn <code>{</code> phải nằm cùng dòng với lệnh <code>if/elseif/else</code>."
        ]
      },
      {
        heading: "2. Phân nhánh theo mẫu với switch",
        content: `Cú pháp <code>switch [options] string pattern_body</code>:`,
        codeExample: `set tool "dc_shell"
switch -glob $tool {
  "dc_shell*" { set vendor "synopsys" }
  "innovus"   { set vendor "cadence" }
  "vivado"    { set vendor "xilinx" }
  default     { set vendor "unknown" }
}

# Ghép nhiều pattern chung 1 khối hành động bằng dấu '-'
switch -glob $filename {
  "*.v" - "*.sv" - "*.vh" { puts "HDL source file" }
  "*.sdc" - "*.upf"       { puts "Constraint file" }
}`,
        bullets: [
          "Các options: <code>-exact</code> (mặc định so khớp chính xác), <code>-glob</code> (so khớp wildcard *, ?), <code>-regexp</code> (biểu thức chính quy), <code>-nocase</code> (không phân biệt hoa/thường)."
        ]
      },
      {
        heading: "3. Vòng lặp: foreach, for, while, break, continue",
        bullets: [
          "<strong>foreach (Quan trọng nhất trong EDA):</strong> Tối ưu nhất khi duyệt qua danh sách các cells, nets, pins, ports hoặc files:",
          "<code>foreach module $modules { puts $module }</code>",
          "Duyệt cặp name-value: <code>foreach {name value} [list a 1 b 2] { puts \"$name = $value\" }</code>",
          "Duyệt mảng: <code>foreach key [array names timing] { puts \"$key: $timing($key)\" }</code>",
          "<strong>for & while:</strong> <code>for {set i 0} {$i < 5} {incr i} { ... }</code>, <code>while {[gets $fid line] >= 0} { ... }</code>.",
          "<strong>break</strong> (thoát khỏi vòng lặp) và <strong>continue</strong> (bỏ qua vòng lặp hiện tại)."
        ]
      },
      {
        heading: "4. Định nghĩa thủ tục (Procedures - proc)",
        content: `Cú pháp: <code>proc ten {danh_sach_tham_so} {than_ham}</code>`,
        codeExample: `# Tham số mặc định:
proc run_synthesis {design {clock_period 10}} {
  puts "Synth $design @ \${clock_period}ns"
  # Thực hiện các bước và trả về kết quả:
  return 1
}

# Sử dụng:
run_synthesis alu     ;# clock_period nhận giá trị mặc định là 10
run_synthesis cpu 5   ;# clock_period nhận giá trị 5`
      },
      {
        heading: "5. Phạm vi biến (Scope): global, upvar & Xử lý lỗi (catch)",
        bullets: [
          "<strong>global:</strong> Cho phép truy cập và sửa đổi biến ở phạm vi toàn cục từ trong hàm: <code>global debug_mode</code>.",
          "<strong>upvar:</strong> Cơ chế truyền tham chiếu (sửa trực tiếp biến của hàm gọi). Cú pháp: <code>upvar $var_name local_ref</code>. <em>Lưu ý quan trọng: Truyền TÊN BIẾN (không có dấu $), ví dụ: <code>incr_by count 5</code>.</em>",
          "<strong>Xử lý lỗi với catch:</strong> Bắt lỗi runtime, ngăn script crash giữa chừng khi gặp file hỏng hoặc tool lỗi:",
          "Cú pháp: <code>if {[catch {exec dc_shell -f run.tcl} out]} { puts \"FAIL: $out\" } else { puts \"PASS\" }</code>.",
          "<code>catch</code> trả về <code>0</code> nếu thực thi lệnh thành công, trả về <code>1</code> (khác 0) nếu xảy ra ngoại lệ."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Chương 5: Xử lý chuỗi và File I/O trong Tcl",
    icon: "file-text",
    summary: "Thành thạo các hàm xử lý chuỗi (string length, match, range, compare), bóc tách dữ liệu có cấu trúc với scan/format, áp dụng Regular Expressions (regexp, regsub) để parse timing report, và kỹ thuật đọc/ghi file an toàn.",
    sections: [
      {
        heading: "1. Thao tác Chuỗi (String Operations)",
        bullets: [
          "<code>[string length $text]</code>: Lấy độ dài chuỗi (ký tự).",
          "<code>[string index $text 0]</code>: Lấy ký tự tại vị trí (chỉ số bắt đầu từ 0; ký tự cuối là <code>end</code>).",
          "<code>[string range $text 0 4]</code>: Trích xuất chuỗi con từ vị trí 0 đến 4.",
          "<code>[string first \"fox\" $s]</code>, <code>[string last \"fox\" $s]</code>: Tìm vị trí xuất hiện đầu tiên/cuối cùng của chuỗi con.",
          "<code>[string match -nocase \"*FOX*\" $s]</code>: Kiểm tra chuỗi có khớp mẫu wildcard hay không.",
          "<code>[string compare $a $b]</code>: So sánh theo thứ tự từ điển (trả về 0 nếu bằng nhau).",
          "<code>[string equal -nocase $a $b]</code>: Trả về 1 nếu bằng nhau, 0 nếu khác nhau."
        ]
      },
      {
        heading: "2. Định dạng & Bóc tách với format và scan",
        content: `Rất phổ biến khi định dạng bảng báo cáo hoặc bóc tách dữ liệu từ các dòng log có khuôn mẫu:`,
        codeExample: `# Định dạng báo cáo căn lề chuẩn:
puts [format "Name: %-10s Area: %8.2f" "adder" 250.45]

# Quét trích xuất biến từ chuỗi cấu trúc:
set data "temp=25.5, voltage=3.3"
if {[scan $data "temp=%f, voltage=%f" t v] == 2} {
  puts "Nhiệt độ t=$t, Điện áp v=$v"
}`
      },
      {
        heading: "3. Biểu thức chính quy (regexp) & Thay thế (regsub)",
        table: {
          headers: ["Ký hiệu Pattern", "Ý nghĩa trong Regex"],
          rows: [
            ["\\d", "Chữ số từ 0 đến 9"],
            ["\\w", "Ký tự từ gồm a-z, A-Z, 0-9, và dấu gạch dưới _"],
            ["\\s", "Ký tự khoảng trắng (space, tab, newline)"],
            [".", "Bất kỳ ký tự nào"],
            ["*  +  ?", "* lặp 0+ lần; + lặp 1+ lần; ? lặp 0 hoặc 1 lần"],
            ["^  $", "^ đánh dấu đầu dòng; $ đánh dấu cuối dòng"],
            ["(...)", "Capture Group để trích xuất dữ liệu con vào biến"]
          ]
        },
        content: `<strong>Ví dụ bóc tách giá trị Slack từ timing report:</strong>`,
        codeExample: `# Bóc tách giá trị số sau "slack ="
if {[regexp {slack\\s*=\\s*([-0-9.]+)\\s*ns} $line -> slack]} {
  if {$slack < 0} {
    puts "Timing Violation detected: $slack ns"
  }
}

# Thay thế bằng regsub với cờ -all (thay thế mọi lần khớp):
set cleaned [regsub -all {\\s+} $str " "]`
      },
      {
        heading: "4. Thao tác File I/O chuẩn & An toàn",
        bullets: [
          "<strong>Các chế độ mở file (Modes):</strong> <code>r</code> (đọc), <code>w</code> (ghi đè), <code>a</code> (ghi nối tiếp vào cuối), <code>r+ / w+</code>.",
          "<strong>Quy tắc vàng:</strong> Luôn bọc <code>open</code> trong <code>catch</code> để bắt lỗi không tìm thấy file hoặc thiếu quyền truy cập:",
          "<code>if {[catch {open \"data.txt\" r} fid]} { puts \"Lỗi: $fid\" } else { ...; close $fid }</code>",
          "<strong>Đọc từng dòng:</strong> Dùng vòng lặp <code>while {[gets $fid line] >= 0} { ... }</code> (tiết kiệm RAM khi đọc file report khổng lồ hàng triệu dòng).",
          "<strong>Đọc toàn bộ file:</strong> <code>set content [read $fid]</code> (nhanh gọn với file nhỏ).",
          "<strong>Luôn đóng file:</strong> Bắt buộc gọi <code>close $fid</code> để tránh tràn file descriptor."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Chương 6: Tích hợp EDA Tools với Tcl",
    icon: "layers",
    summary: "Hiểu vị thế Tcl là giao diện chung chuẩn công nghiệp cho EDA, làm chủ luồng tổng hợp Design Compiler, phân tích định thời PrimeTime, thiết kế vật lý PnR trên Innovus, luồng FPGA trên Vivado, và kiến trúc Unified Automation Framework.",
    sections: [
      {
        heading: "1. Vị thế của Tcl trong Hệ sinh thái EDA",
        content: `Tại sao tất cả các hãng lớn (Synopsys, Cadence, Siemens, AMD/Xilinx) đều chọn Tcl làm ngôn ngữ điều khiển native?`,
        bullets: [
          "Tcl đơn giản, dễ nhúng (embeddable) trực tiếp vào lõi phần mềm C/C++ của công cụ.",
          "Cung cấp giao diện dòng lệnh tương tác (interactive console) mạnh mẽ.",
          "Dễ mở rộng bằng các câu lệnh riêng của từng công cụ (custom commands) mà vẫn tuân thủ chung cú pháp Tcl chuẩn.",
          "<strong>Các công cụ tiêu biểu:</strong> Synopsys Design Compiler (Logic Synthesis), PrimeTime (Static Timing Analysis), ICC2 (PnR); Cadence Genus (Synthesis), Tempus (Timing), Innovus (PnR); Xilinx Vivado (FPGA Flow)."
        ]
      },
      {
        heading: "2. Giao diện truy vấn đối tượng chung (Common Object Query)",
        content: `Các câu lệnh chuẩn để truy xuất cơ sở dữ liệu thiết kế:`,
        bullets: [
          "<code>get_cells *adder*</code>: Lấy danh sách các cell logic khớp mẫu.",
          "<code>get_nets clk</code>: Lấy đường dây tín hiệu net.",
          "<code>get_pins */D</code>: Lấy chân tín hiệu của các flip-flop.",
          "<code>get_ports [all_inputs]</code>: Lấy toàn bộ các cổng vào ngoại vi."
        ]
      },
      {
        heading: "3. Luồng tổng hợp logic với Synopsys Design Compiler (DC)",
        content: `Quy trình 5 bước chuẩn công nghiệp trong kịch bản tổng hợp:`,
        bullets: [
          "<strong>1. Đọc RTL:</strong> <code>analyze -format verilog [list top.v adder.v]</code> và <code>elaborate $DESIGN_NAME</code> (hoặc <code>read_verilog</code>).",
          "<strong>2. Thiết lập ràng buộc (Constraints):</strong> <code>create_clock -name clk -period 10.0 [get_ports clk]</code>, <code>set_input_delay</code>, <code>set_output_delay</code>.",
          "<strong>3. Tối ưu & Tổng hợp (Compile):</strong> <code>compile_ultra</code> (tối ưu hóa chuyên sâu cả timing, diện tích và công suất).",
          "<strong>4. Xuất báo cáo (Report):</strong> <code>report_timing > timing.rpt</code>, <code>report_area</code>, <code>report_power</code>.",
          "<strong>5. Xuất kết quả (Output Netlist & SDC):</strong> <code>write -format verilog -output synth.v</code>, <code>write_sdc design.sdc</code>."
        ]
      },
      {
        heading: "4. Phân tích định thời tĩnh với Synopsys PrimeTime (STA)",
        content: `Các câu lệnh và kỹ thuật gỡ lỗi vi phạm timing quan trọng:`,
        bullets: [
          "<code>report_timing -delay_type max</code>: Kiểm tra vi phạm <strong>Setup Time</strong>.",
          "<code>report_timing -delay_type min</code>: Kiểm tra vi phạm <strong>Hold Time</strong>.",
          "<code>report_constraint -all_violators</code>: Báo cáo danh sách mọi ràng buộc bị vi phạm.",
          "<strong>Truy vấn tập hợp đường truyền vi phạm:</strong>",
          "<code>set paths [get_timing_paths -delay_type max -slack_lesser_than 0 -max_paths 50]</code>",
          "Duyệt qua tập hợp bằng <code>foreach_in_collection path $paths</code>, dùng <code>get_attribute $path slack</code>, <code>startpoint</code>, <code>endpoint</code> để phân loại đường truyền (<code>reg2reg</code>, <code>in2reg</code>, <code>reg2out</code>) và ưu tiên sửa lỗi đường có <strong>worst negative slack</strong> trước."
        ]
      },
      {
        heading: "5. Luồng thiết kế vật lý Place & Route (PnR) trên Cadence Innovus",
        bullets: [
          "<strong>1. Init:</strong> Nạp file công nghệ và thư viện cell (<code>read_lef</code>), nạp netlist sau tổng hợp (<code>read_verilog</code>), khởi tạo môi trường (<code>init_design</code>).",
          "<strong>2. Floorplan + Power Plan:</strong> Tạo khung chip, tỷ lệ mật độ core (<code>create_floorplan -core_density 70</code>) và dựng lưới nguồn cấp VDD/VSS.",
          "<strong>3. Placement:</strong> Định vị hàng trăm nghìn cell tối ưu theo định thời (<code>place_design</code>).",
          "<strong>4. Clock Tree Synthesis (CTS):</strong> Dựng cây đệm xung nhịp cân bằng độ lệch skew (<code>clock_design</code>).",
          "<strong>5. Routing:</strong> Đi dây kim loại nối các chân linh kiện (<code>route_design</code>) và tối ưu hóa hậu định tuyến (<code>opt_design -postRoute</code>).",
          "<strong>6. Verification & Export:</strong> Kiểm tra luật sản xuất (<code>verify_drc</code>), kiểm tra thông mạch (<code>verify_connectivity</code>), xuất file layout (<code>write_def</code>, <code>saveDesign</code>)."
        ]
      },
      {
        heading: "6. Luồng FPGA trên Vivado & Unified Automation Framework",
        content: `Kiến trúc khung kịch bản thống nhất (Unified Multi-Tool Flow):`,
        bullets: [
          "Dùng cấu trúc <code>switch $tool</code> để gọi mô-đun chạy luồng tương ứng (DC synthesis, PrimeTime STA, Innovus PnR, Vivado FPGA).",
          "Tách biệt toàn bộ biến cấu hình (Tên thiết kế, chu kỳ xung nhịp, công nghệ thư viện) lên đầu kịch bản để dễ dàng tái sử dụng và kiểm thử nhiều kịch bản (What-if analysis).",
          "Xây dựng khung Regression Test tự động quét toàn bộ bộ testbench, bọc trong <code>catch</code>, đếm số test PASS/FAIL và tự động tính tỷ lệ phần trăm thành công."
        ]
      }
    ]
  }
];
