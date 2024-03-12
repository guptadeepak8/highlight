import React from 'react'

import { IconProps } from './types'

export const IconSolidGrafana = ({ size = '1em', ...props }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17.1997 9.0611C17.1733 8.79223 17.1292 8.48369 17.041 8.13988C16.9529 7.80049 16.8207 7.42583 16.6267 7.03796C16.4328 6.65008 16.1815 6.24897 15.8554 5.85669C15.7275 5.70242 15.5865 5.55256 15.4366 5.4071C15.6614 4.51234 15.1634 3.73658 15.1634 3.73658C14.3039 3.68369 13.7573 4.00545 13.5545 4.1509C13.5193 4.13768 13.4884 4.12005 13.4532 4.10683C13.3077 4.04953 13.1579 3.99223 12.9992 3.94374C12.8449 3.89526 12.6862 3.85118 12.5231 3.81151C12.3601 3.77184 12.197 3.74099 12.0295 3.71454C11.9986 3.71013 11.9722 3.70572 11.9413 3.70132C11.5667 2.50242 10.4912 1.99994 10.4912 1.99994C9.28788 2.76247 9.06308 3.82914 9.06308 3.82914C9.06308 3.82914 9.05868 3.85118 9.04986 3.89085C8.98375 3.90848 8.91763 3.93052 8.85151 3.94815C8.75895 3.97459 8.66639 4.00986 8.57824 4.04512C8.48567 4.08038 8.39752 4.11564 8.30496 4.15531C8.12424 4.23465 7.94353 4.3228 7.76722 4.41977C7.59532 4.51674 7.42782 4.62253 7.26474 4.73272L7.22066 4.71509C5.55455 4.08038 4.07796 4.84291 4.07796 4.84291C3.94132 6.61481 4.74353 7.72997 4.9022 7.93272C4.86253 8.04291 4.82727 8.15311 4.79201 8.2633C4.66859 8.6644 4.57603 9.07432 4.51873 9.50187C4.50992 9.56358 4.5011 9.62528 4.49669 9.68699C2.95399 10.4495 2.5 12.0054 2.5 12.0054C3.78264 13.482 5.28127 13.5746 5.28127 13.5746L5.28567 13.5702C5.47521 13.9096 5.69559 14.2313 5.94242 14.5355C6.04821 14.6633 6.15399 14.7823 6.26859 14.9013C5.80138 16.2413 6.33471 17.352 6.33471 17.352C7.76281 17.4049 8.70165 16.7261 8.9 16.5718C9.04105 16.6203 9.1865 16.6644 9.33196 16.6997C9.77273 16.8143 10.2223 16.8804 10.6719 16.898C10.7821 16.9024 10.8967 16.9068 11.0069 16.9024H11.1656L11.2361 16.898V16.9024C11.9105 17.8633 13.0917 17.9999 13.0917 17.9999C13.9336 17.114 13.9821 16.2324 13.9821 16.0429V15.9636C14.1584 15.8402 14.3259 15.7079 14.4846 15.5625C14.8196 15.2583 15.1149 14.9101 15.3617 14.5355L15.4278 14.4297C16.3799 14.4826 17.0543 13.8391 17.0543 13.8391C16.8956 12.8473 16.3314 12.3625 16.2124 12.2699C16.0934 12.1774 16.208 12.2655 16.1992 12.2611C16.1904 12.2567 16.1904 12.2523 16.1904 12.2523C16.1859 12.2479 16.1771 12.2435 16.1683 12.2391C16.1727 12.1773 16.1771 12.12 16.1815 12.0583C16.1904 11.9526 16.1904 11.8424 16.1904 11.7366V11.5691L16.1859 11.503L16.1815 11.4148C16.1815 11.384 16.1771 11.3575 16.1727 11.3311C16.1683 11.3046 16.1683 11.2738 16.1639 11.2473L16.1551 11.1636L16.1419 11.0798C16.1242 10.9696 16.1066 10.8639 16.0802 10.7537C15.9788 10.3261 15.8113 9.9206 15.5953 9.55476C15.3749 9.18892 15.1017 8.86716 14.7887 8.59388C14.4802 8.3206 14.132 8.10021 13.7705 7.93713C13.4047 7.77404 13.0256 7.66826 12.6466 7.61977C12.457 7.59333 12.2675 7.58451 12.078 7.58892H11.9369L11.8664 7.59333C11.8399 7.59333 11.8135 7.59774 11.7915 7.59774C11.6945 7.60655 11.5975 7.61977 11.505 7.6374C11.1259 7.70793 10.7689 7.84457 10.4559 8.0341C10.143 8.22363 9.8697 8.45724 9.64931 8.7217C9.42893 8.98617 9.25702 9.28148 9.13802 9.58561C9.01901 9.88975 8.95289 10.2071 8.93526 10.5112C8.93085 10.5862 8.93085 10.6655 8.93085 10.7404V10.7977L8.93526 10.8594C8.93967 10.8947 8.93967 10.9344 8.94408 10.9696C8.9573 11.1239 8.98815 11.2738 9.02782 11.4148C9.11157 11.7013 9.2438 11.9614 9.40689 12.1818C9.56997 12.4021 9.76832 12.5829 9.97548 12.7283C10.1826 12.8694 10.4074 12.9707 10.6278 13.0369C10.8482 13.103 11.0686 13.1294 11.2758 13.1294H11.3904C11.4036 13.1294 11.4168 13.1294 11.43 13.125C11.4521 13.125 11.4741 13.1206 11.4961 13.1206C11.5006 13.1206 11.5094 13.1206 11.5138 13.1162L11.5358 13.1118C11.549 13.1118 11.5623 13.1074 11.5755 13.1074C11.6019 13.103 11.624 13.0986 11.6504 13.0942C11.6769 13.0897 11.6989 13.0853 11.7209 13.0765C11.7694 13.0677 11.8135 13.0501 11.8576 13.0369C11.9457 13.006 12.0339 12.9707 12.1088 12.9311C12.1882 12.8914 12.2587 12.8429 12.3292 12.7988C12.3468 12.7856 12.3689 12.7724 12.3865 12.7548C12.457 12.6975 12.4702 12.5917 12.4129 12.5212C12.3645 12.4594 12.2763 12.4418 12.2058 12.4815L12.1529 12.5079C12.0912 12.5388 12.0295 12.5652 11.9634 12.5873C11.8972 12.6093 11.8267 12.6269 11.7562 12.6402C11.7209 12.6446 11.6857 12.649 11.646 12.6534C11.6284 12.6534 11.6107 12.6578 11.5887 12.6578H11.4829C11.4609 12.6578 11.4388 12.6578 11.4168 12.6534H11.3904C11.3815 12.6534 11.3683 12.6534 11.3595 12.649C11.3375 12.6446 11.3198 12.6446 11.2978 12.6402C11.1347 12.6181 10.9716 12.5696 10.8174 12.4991C10.6587 12.4286 10.5088 12.3316 10.3722 12.2082C10.2355 12.0848 10.1165 11.9393 10.024 11.7718C9.9314 11.6043 9.86529 11.4192 9.83443 11.2253C9.82121 11.1283 9.8124 11.0269 9.8168 10.93C9.8168 10.9035 9.82121 10.8771 9.82121 10.8506V10.8154C9.82121 10.8021 9.82562 10.7889 9.82562 10.7757C9.83003 10.7228 9.83884 10.6699 9.84766 10.617C9.92259 10.1939 10.1342 9.77955 10.4603 9.46661C10.5441 9.38727 10.6322 9.31674 10.7248 9.25063C10.8174 9.18451 10.9187 9.12721 11.0245 9.07873C11.1303 9.03024 11.2361 8.99057 11.3507 8.95972C11.4609 8.92886 11.5755 8.91123 11.6945 8.89801C11.7518 8.8936 11.8091 8.8892 11.8708 8.8892H12.0074L12.0559 8.8936C12.1837 8.90242 12.3072 8.92005 12.4306 8.9509C12.6774 9.0038 12.9198 9.09636 13.1446 9.21977C13.5942 9.47101 13.9777 9.85889 14.2113 10.3261C14.3303 10.5597 14.4141 10.811 14.4537 11.071C14.4625 11.1371 14.4713 11.2032 14.4758 11.2694L14.4846 11.3663V11.5559C14.4846 11.5867 14.4802 11.6396 14.4802 11.6705C14.4758 11.741 14.4669 11.8159 14.4581 11.8864C14.4493 11.957 14.4361 12.0275 14.4229 12.098C14.4096 12.1685 14.392 12.2391 14.3744 12.3052C14.3391 12.4418 14.295 12.5785 14.2421 12.7151C14.1364 12.9796 13.9953 13.2352 13.8278 13.4688C13.4884 13.936 13.0256 14.3151 12.4967 14.5575C12.2322 14.6765 11.9545 14.7647 11.668 14.8088C11.527 14.8352 11.3815 14.8484 11.2361 14.8528H11.0157C10.9364 14.8528 10.8614 14.8484 10.7821 14.8396C10.4736 14.8176 10.1694 14.7603 9.8697 14.6765C9.57438 14.5928 9.28788 14.4738 9.0146 14.3327C8.47245 14.0418 7.9832 13.6451 7.60413 13.1647C7.4146 12.9267 7.24711 12.6666 7.11047 12.3977C6.97383 12.1289 6.86364 11.8424 6.7843 11.5559C6.70496 11.265 6.65647 10.9696 6.63444 10.6699L6.63003 10.6126V10.2203C6.63443 10.0749 6.64766 9.9206 6.66529 9.77074C6.68292 9.62088 6.70937 9.46661 6.74022 9.31674C6.77107 9.16688 6.80634 9.01702 6.85041 8.86716C6.93416 8.57184 7.03994 8.28534 7.16336 8.01647C7.4146 7.47873 7.74077 6.99829 8.13306 6.61481C8.23003 6.51785 8.3314 6.42969 8.43719 6.34154C8.54297 6.25779 8.65317 6.17845 8.76777 6.10352C8.87796 6.02859 8.99697 5.96247 9.11598 5.90077C9.17328 5.86991 9.23499 5.83906 9.29669 5.81261L9.48182 5.73327C9.60523 5.68038 9.73306 5.6363 9.86529 5.59663C9.89614 5.58782 9.9314 5.579 9.96226 5.56578C9.99311 5.55696 10.0284 5.54815 10.0592 5.53933C10.1253 5.5217 10.1915 5.50407 10.2576 5.49085C10.2884 5.48203 10.3237 5.47762 10.359 5.46881C10.3942 5.45999 10.4251 5.45559 10.4603 5.44677C10.4956 5.44236 10.5264 5.43355 10.5617 5.42914L10.6102 5.42032L10.6631 5.41151C10.6983 5.4071 10.7292 5.40269 10.7645 5.39829C10.8041 5.39388 10.8394 5.38947 10.8791 5.38506C10.9099 5.38066 10.9628 5.37625 10.9937 5.37184C11.0157 5.36743 11.0421 5.36743 11.0642 5.36302L11.1127 5.35862L11.1347 5.35421H11.1612C11.2008 5.3498 11.2361 5.3498 11.2758 5.34539L11.3331 5.34099H11.3771C11.408 5.34099 11.4432 5.33658 11.4741 5.33658C11.6019 5.33217 11.7342 5.33217 11.862 5.33658C12.1176 5.34539 12.3689 5.37625 12.6113 5.42032C13.1005 5.51289 13.559 5.66716 13.9777 5.87432C14.3964 6.07707 14.7667 6.32831 15.0928 6.60159C15.1149 6.61922 15.1325 6.63685 15.1545 6.65448C15.1722 6.67212 15.1942 6.68975 15.2118 6.70738C15.2515 6.74264 15.2868 6.7779 15.3264 6.81316C15.3661 6.84842 15.4014 6.88369 15.4366 6.91895C15.4719 6.95421 15.5072 6.98947 15.5424 7.02914C15.6791 7.17459 15.8069 7.32005 15.9215 7.46991C16.1507 7.76523 16.3358 8.06495 16.4813 8.34705L16.5342 8.45283C16.5518 8.48809 16.5694 8.52336 16.5826 8.55862C16.6003 8.59388 16.6135 8.62473 16.6311 8.65999C16.6444 8.69526 16.662 8.72611 16.6752 8.76137C16.7281 8.8936 16.781 9.02143 16.8207 9.14043C16.8868 9.33437 16.9353 9.50628 16.9749 9.65614C16.9882 9.71785 17.0455 9.75751 17.1072 9.7487C17.1733 9.74429 17.2218 9.6914 17.2218 9.62528C17.2262 9.46661 17.2218 9.27707 17.1997 9.0611Z"
				fill="#322444"
			/>
		</svg>
	)
}