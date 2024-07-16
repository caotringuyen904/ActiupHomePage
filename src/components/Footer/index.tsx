const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <img
            src="https://beta-uat.actiup.net/images/icons/logo.svg"
            alt="Logo"
            className="h-10 mb-4"
          />
          <a href="http://online.gov.vn/Home/WebDetails/102537" target="_blank">
            <img
              src="https://actiup.net/icons/logo-bct.png"
              alt="Giay chung nhan"
              className="h-10 mb-4"
            />
          </a>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">TRUNG TÂM HỖ TRỢ</h3>
          <p>Hotline: 1900 63 83 37 (1.000đ/phút)</p>
          <p>(09:00 - 17:00 từ thứ hai đến thứ sáu)</p>
          <p>Email: support@actiup.net</p>
          <h3 className="text-lg font-semibold mt-4">CHỨNG NHẬN BỞI</h3>

          <div className="flex gap-6">
            <a
              href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/actiupnet-1661143928"
              target="_blank"
            >
              <img
                src="https://tinnhiemmang.vn/handle_cert?id=actiup.net"
                alt="Tin nhiem mang"
                className="h-20 w-30 mb-4"
              />
            </a>
            <a href="https://cystack.net/projects/actiup" target="_blank">
              <img
                src="https://actiup.net/icons/logo-cystack.svg"
                alt="Tin nhiem mang"
                className="h-10 mr-4"
              />
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">VỀ ACTIUP</h3>
          <ul>
            <li>
              <a
                href="https://www.techhaus.vn/"
                className="hover:text-gray-700"
              >
                Về chúng tôi
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/services"
                className="hover:text-gray-700"
              >
                Dịch vụ cung cấp
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/ecommerce-regulations"
                className="hover:text-gray-700"
              >
                Quy chế hoạt động
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/terms-and-conditions"
                className="hover:text-gray-700"
              >
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/privacy-policy"
                className="hover:text-gray-700"
              >
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/information-privacy-policy"
                className="hover:text-gray-700"
              >
                Chính Sách Bảo Mật Thông Tin Cá Nhân
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/transaction-process"
                className="hover:text-gray-700"
              >
                Quy trình giao dịch
              </a>
            </li>
            <li>
              <a
                href="https://actiup.net/complaint-process"
                className="hover:text-gray-700"
              >
                Quy trình khiếu nại
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PHƯƠNG THỨC THANH TOÁN</h3>
          <ul>
            <li className="flex items-center mb-2">
              <img
                src="https://actiup.net/icons/checkout/credit.png"
                alt="Credit Card"
                className="h-6 w-6 mr-2"
              />
              Thẻ tín dụng
            </li>
            <li className="flex items-center mb-2">
              <img
                src="https://actiup.net/icons/checkout/atm.png"
                alt="ATM"
                className="h-6 w-6 mr-2"
              />
              Thẻ ATM - Hỗ trợ Internet Banking
            </li>
            <li className="flex items-center mb-2">
              <img
                src="https://actiup.net/icons/checkout/bank.png"
                alt="Bank Transfer"
                className="h-6 w-6 mr-2"
              />
              Chuyển khoản ngân hàng - Thông qua số tài khoản
            </li>
            <li className="flex items-center mb-2">
              <img
                src="https://actiup.net/icons/checkout/ewallet.png"
                alt="E-wallet"
                className="h-6 w-6 mr-2"
              />
              Thanh toán ví điện tử
            </li>
            <li className="flex items-center mb-2">
              <img
                src="https://actiup.net/icons/checkout/cod.png"
                alt="COD"
                className="h-6 w-6 mr-2"
              />
              COD
            </li>
            <li className="flex items-center mb-2">
              <img
                src="https://actiup.net/icons/checkout/vnpayQR.png"
                alt="VNPAY"
                className="h-6 w-6 mr-2"
              />
              VNPAY
            </li>
          </ul>
        </div>
      </div>

      <div
        className="w-full bg-blue-600 text-white text-sm py-4 flex items-center justify-center opacity-60"
        style={{ gridColumn: "1 / span 4" }}
      >
        <div className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-20 text-white text-xs">
          <p>© 2023 All rights reserved. Techhaus Vietnam.</p>
          <p>
            {" "}
            CÔNG TY CỔ PHẦN TECHHAUS VIETNAM 68-70 Nguyễn Ngọc Phương, P.19, Q.
            Bình Thạnh, TP.HCM
          </p>
          <p>
            Giấy phép Kinh doanh số 0315936794 do Sở Kế hoạch & Đầu tư TP.HCM
            cấp ngày 02/10/2019
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
