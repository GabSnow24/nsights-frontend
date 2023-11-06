export const AiExpert = (props?:any) => {
    const {height = 19, width=18, color = "#9155FD" } = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 19" fill={color}>
            <path d="M16.8236 11.1324V7.11035C17.0336 7.05698 17.2302 6.96049 17.4008 6.82703C17.5714 6.69357 17.7124 6.52606 17.8148 6.33515C17.9171 6.14425 17.9786 5.93413 17.9953 5.71817C18.0121 5.50221 17.9836 5.28513 17.9119 5.08076C17.8401 4.87639 17.7265 4.68919 17.5785 4.53107C17.4304 4.37296 17.251 4.2474 17.0517 4.16237C16.8525 4.07734 16.6377 4.03472 16.4211 4.03721C16.2044 4.0397 15.9907 4.08724 15.7934 4.17682L14.551 2.62421C14.7554 2.35576 14.8666 2.02794 14.8677 1.69055C14.8685 1.31008 14.7303 0.942423 14.4791 0.656651C14.2279 0.370879 13.8809 0.186671 13.5034 0.138641C13.1259 0.0906106 12.7439 0.182066 12.4291 0.39582C12.1143 0.609575 11.8884 0.930913 11.7938 1.29945H6.20625C6.14958 1.07522 6.04376 0.866397 5.89646 0.688078C5.74915 0.509758 5.56404 0.366406 5.35451 0.268393C5.14499 0.17038 4.91629 0.120157 4.68497 0.121359C4.45365 0.122561 4.22549 0.175156 4.017 0.275341C3.80851 0.375525 3.62489 0.520793 3.47945 0.700634C3.334 0.880474 3.23036 1.09039 3.17602 1.31519C3.12168 1.54 3.11801 1.77407 3.16526 2.00046C3.21251 2.22686 3.3095 2.43993 3.44922 2.62425L2.20681 4.1769C2.00612 4.08539 1.78822 4.03774 1.56766 4.03712C1.18711 4.03631 0.819372 4.17448 0.533539 4.42565C0.247707 4.67682 0.0634592 5.02371 0.015419 5.40113C-0.0326213 5.77855 0.0588532 6.16052 0.272653 6.47526C0.486453 6.79 0.80786 7.01584 1.17648 7.11035V11.1324C0.966492 11.1857 0.769916 11.2822 0.59926 11.4157C0.428603 11.5491 0.287604 11.7166 0.185233 11.9076C0.0828633 12.0985 0.0213648 12.3086 0.00465151 12.5246C-0.0120618 12.7405 0.0163762 12.9576 0.0881557 13.162C0.159935 13.3664 0.273484 13.5536 0.421577 13.7117C0.569669 13.8698 0.749062 13.9954 0.948338 14.0804C1.14761 14.1654 1.36241 14.208 1.57906 14.2055C1.7957 14.203 2.00946 14.1554 2.20671 14.0658L3.44919 15.6185C3.24471 15.8869 3.13347 16.2148 3.13237 16.5522C3.13156 16.9326 3.26975 17.3003 3.52098 17.5861C3.7722 17.8718 4.11917 18.0561 4.49667 18.1041C4.87417 18.1521 5.25622 18.0607 5.57102 17.8469C5.88583 17.6332 6.11172 17.3118 6.20625 16.9433H11.7938C11.8505 17.1675 11.9563 17.3763 12.1037 17.5546C12.251 17.7329 12.4361 17.8763 12.6456 17.9743C12.8551 18.0723 13.0838 18.1225 13.3151 18.1213C13.5464 18.1201 13.7746 18.0675 13.983 17.9674C14.1915 17.8672 14.3751 17.7219 14.5206 17.5421C14.6661 17.3623 14.7697 17.1524 14.8241 16.9276C14.8784 16.7028 14.8821 16.4687 14.8349 16.2423C14.7877 16.016 14.6907 15.8029 14.551 15.6186L15.7935 14.0659C15.9906 14.1551 16.2042 14.2022 16.4206 14.2044C16.6369 14.2066 16.8514 14.1638 17.0504 14.0787C17.2493 13.9936 17.4284 13.8681 17.5762 13.7101C17.724 13.5521 17.8374 13.3651 17.9091 13.161C17.9807 12.9568 18.0092 12.74 17.9926 12.5243C17.976 12.3086 17.9147 12.0987 17.8126 11.908C17.7106 11.7172 17.5699 11.5498 17.3997 11.4162C17.2294 11.2827 17.0332 11.1861 16.8236 11.1324ZM13.303 14.9878C13.0825 14.9884 12.8647 15.036 12.6641 15.1274L11.4217 13.5747C11.6182 13.317 11.7287 13.0041 11.7377 12.6802C11.7467 12.3562 11.6538 12.0377 11.472 11.7694L13.303 9.71L15.134 11.7695C14.9522 12.0378 14.8593 12.3564 14.8683 12.6803C14.8774 13.0042 14.9879 13.3171 15.1844 13.5748L13.9419 15.1274C13.7413 15.036 13.5235 14.9884 13.303 14.9878ZM4.05806 15.1275L2.81556 13.5749C3.0121 13.3172 3.1227 13.0043 3.13177 12.6804C3.14084 12.3565 3.0479 12.0379 2.86608 11.7696L4.69712 9.7102L6.52808 11.7696C6.34626 12.0379 6.25333 12.3564 6.2624 12.6804C6.27147 13.0043 6.38208 13.3172 6.57862 13.5748L5.33619 15.1276C5.13573 15.0355 4.91774 14.9878 4.69713 14.9878C4.47652 14.9878 4.25852 15.0355 4.05806 15.1275ZM2.27691 6.98802L4.17365 9.1214L2.27688 11.2547C2.1757 11.2023 2.06904 11.1613 1.95883 11.1324V7.11035C2.06904 7.08142 2.17572 7.04039 2.27691 6.98802ZM4.69708 3.25493C4.91765 3.25431 5.13555 3.20666 5.33623 3.11515L6.57865 4.6678C6.38209 4.9255 6.27147 5.23841 6.2624 5.56237C6.25333 5.88632 6.34628 6.20493 6.52811 6.47322L4.69712 8.53257L2.86611 6.4731C3.0479 6.20484 3.14083 5.88628 3.13177 5.56237C3.12271 5.23847 3.01212 4.92559 2.81561 4.66792L4.05809 3.11523C4.25873 3.2067 4.47658 3.25432 4.69708 3.25493ZM13.9419 3.11535L15.1844 4.668C14.9879 4.92572 14.8774 5.23861 14.8683 5.56252C14.8593 5.88643 14.9522 6.205 15.134 6.47326L13.303 8.5328L11.472 6.47326C11.6538 6.205 11.7467 5.88643 11.7377 5.56252C11.7287 5.23861 11.6181 4.92572 11.4217 4.668L12.664 3.11523C12.8645 3.20726 13.0824 3.25491 13.3029 3.25493C13.5235 3.25495 13.7414 3.20734 13.9419 3.11535ZM7.82651 6.38369C7.67178 6.38369 7.52052 6.33782 7.39186 6.25187C7.2632 6.16592 7.16293 6.04376 7.10371 5.90083C7.0445 5.75791 7.029 5.60064 7.05919 5.4489C7.08938 5.29717 7.16389 5.1578 7.2733 5.04841C7.38272 4.93902 7.52212 4.86452 7.67388 4.83434C7.82565 4.80416 7.98295 4.81965 8.12591 4.87885C8.26887 4.93805 8.39105 5.03831 8.47702 5.16694C8.56299 5.29557 8.60887 5.4468 8.60887 5.6015C8.60866 5.80889 8.52617 6.00772 8.3795 6.15437C8.23282 6.30101 8.03395 6.38349 7.82651 6.38369ZM7.11739 6.98805C7.21853 7.04042 7.32517 7.08143 7.43534 7.11035V11.1324C7.32514 11.1613 7.21848 11.2023 7.11731 11.2547L5.22064 9.1214L7.11739 6.98805ZM7.04416 12.6412C7.04416 12.4865 7.09004 12.3353 7.17601 12.2067C7.26197 12.078 7.38416 11.9778 7.52712 11.9186C7.67008 11.8594 7.82738 11.8439 7.97914 11.8741C8.13091 11.9042 8.27031 11.9787 8.37972 12.0881C8.48914 12.1975 8.56365 12.3369 8.59384 12.4886C8.62403 12.6404 8.60853 12.7976 8.54932 12.9406C8.4901 13.0835 8.38983 13.2056 8.26117 13.2916C8.13251 13.3775 7.98125 13.4234 7.82651 13.4234C7.61908 13.4232 7.42021 13.3407 7.27353 13.1941C7.12686 13.0474 7.04436 12.8486 7.04416 12.6412ZM8.21769 11.1324V7.11035C8.5214 7.03113 8.7941 6.86204 9.00005 6.62523C9.206 6.86204 9.4787 7.03113 9.78241 7.11035V11.1324C9.4787 11.2116 9.206 11.3807 9.00005 11.6175C8.7941 11.3807 8.5214 11.2116 8.21769 11.1324ZM10.9559 5.6015C10.9559 5.75621 10.9101 5.90743 10.8241 6.03607C10.7381 6.1647 10.6159 6.26495 10.473 6.32415C10.33 6.38336 10.1727 6.39885 10.021 6.36866C9.86919 6.33848 9.72979 6.26399 9.62038 6.1546C9.51096 6.0452 9.43645 5.90583 9.40626 5.7541C9.37607 5.60237 9.39157 5.4451 9.45078 5.30217C9.51 5.15924 9.61027 5.03708 9.73893 4.95113C9.86759 4.86519 10.0189 4.81931 10.1736 4.81931C10.381 4.81955 10.5799 4.90204 10.7265 5.04868C10.8732 5.19531 10.9557 5.39413 10.9559 5.6015ZM10.1736 11.859C10.3283 11.859 10.4796 11.9049 10.6082 11.9909C10.7369 12.0768 10.8372 12.199 10.8964 12.3419C10.9556 12.4848 10.9711 12.6421 10.9409 12.7938C10.9107 12.9456 10.8362 13.0849 10.7268 13.1943C10.6174 13.3037 10.478 13.3782 10.3262 13.4084C10.1745 13.4386 10.0171 13.4231 9.87419 13.3639C9.73123 13.3047 9.60905 13.2044 9.52308 13.0758C9.43711 12.9472 9.39123 12.7959 9.39123 12.6412C9.39147 12.4338 9.47397 12.235 9.62064 12.0884C9.76731 11.9418 9.96617 11.8593 10.1736 11.859ZM10.8829 11.2548C10.7817 11.2023 10.675 11.1613 10.5648 11.1324V7.11035C10.675 7.08143 10.7818 7.04037 10.883 6.98794L12.7797 9.1214L10.8829 11.2548ZM12.0549 2.62405L10.8126 4.17682C10.508 4.03739 10.1662 4.00111 9.83908 4.07347C9.51197 4.14583 9.2174 4.32288 9.00005 4.57777C8.7827 4.32288 8.48813 4.14583 8.16103 4.07347C7.83392 4.00111 7.49214 4.03739 7.18752 4.17682L5.94502 2.62413C6.06668 2.46208 6.15543 2.27779 6.20625 2.08164H11.7938C11.8446 2.27775 11.9333 2.46202 12.0549 2.62405ZM5.94502 15.6186L7.18745 14.0658C7.49205 14.2053 7.83386 14.2416 8.16098 14.1693C8.48811 14.0969 8.7827 13.9199 9.00005 13.665C9.21741 13.9198 9.512 14.0969 9.83912 14.1693C10.1662 14.2416 10.508 14.2053 10.8127 14.0659L12.055 15.6186C11.9333 15.7806 11.8446 15.9649 11.7938 16.1611H6.20625C6.15543 15.9649 6.06668 15.7806 5.94502 15.6186ZM15.723 11.2548L13.8263 9.1214L15.723 6.98794C15.8243 7.04037 15.931 7.08143 16.0413 7.11035V11.1324C15.931 11.1613 15.8242 11.2024 15.723 11.2548ZM17.2148 5.6015C17.2148 5.75621 17.1689 5.90743 17.083 6.03607C16.997 6.1647 16.8748 6.26495 16.7318 6.32415C16.5889 6.38336 16.4316 6.39885 16.2798 6.36866C16.1281 6.33848 15.9887 6.26399 15.8792 6.1546C15.7698 6.0452 15.6953 5.90583 15.6651 5.7541C15.6349 5.60237 15.6504 5.4451 15.7096 5.30217C15.7689 5.15924 15.8691 5.03708 15.9978 4.95113C16.1264 4.86519 16.2777 4.81931 16.4324 4.81931C16.6399 4.81955 16.8387 4.90204 16.9854 5.04868C17.1321 5.19531 17.2146 5.39413 17.2148 5.6015ZM13.303 0.908356C13.4578 0.908356 13.609 0.954231 13.7377 1.04018C13.8663 1.12613 13.9666 1.24829 14.0258 1.39122C14.085 1.53414 14.1005 1.69141 14.0703 1.84315C14.0402 1.99488 13.9656 2.13425 13.8562 2.24364C13.7468 2.35303 13.6074 2.42753 13.4556 2.45771C13.3039 2.48789 13.1466 2.4724 13.0036 2.4132C12.8607 2.354 12.7385 2.25374 12.6525 2.12511C12.5665 1.99648 12.5207 1.84525 12.5207 1.69055C12.5209 1.48317 12.6034 1.28436 12.7501 1.13772C12.8967 0.991084 13.0956 0.908597 13.303 0.908356ZM4.69708 0.908356C4.85182 0.908356 5.00308 0.954231 5.13174 1.04018C5.2604 1.12613 5.36067 1.24829 5.41989 1.39122C5.4791 1.53414 5.4946 1.69141 5.46441 1.84315C5.43422 1.99488 5.35971 2.13425 5.25029 2.24364C5.14088 2.35303 5.00148 2.42753 4.84972 2.45771C4.69795 2.48789 4.54065 2.4724 4.39769 2.4132C4.25473 2.354 4.13254 2.25374 4.04658 2.12511C3.96061 1.99648 3.91473 1.84525 3.91473 1.69055C3.91493 1.48316 3.99743 1.28433 4.1441 1.13768C4.29078 0.991039 4.48965 0.908563 4.69708 0.908356ZM0.785298 5.6015C0.785298 5.4468 0.831182 5.29557 0.917149 5.16694C1.00312 5.03831 1.1253 4.93805 1.26826 4.87885C1.41122 4.81965 1.56852 4.80416 1.72029 4.83434C1.87205 4.86452 2.01145 4.93902 2.12087 5.04841C2.23028 5.1578 2.30479 5.29717 2.33498 5.4489C2.36517 5.60064 2.34967 5.75791 2.29046 5.90083C2.23124 6.04376 2.13097 6.16592 2.00231 6.25187C1.87365 6.33782 1.72239 6.38369 1.56766 6.38369C1.36022 6.38349 1.16135 6.30101 1.01467 6.15437C0.867998 6.00772 0.785505 5.80889 0.785298 5.6015ZM0.785298 12.6412C0.785298 12.4865 0.831182 12.3353 0.917149 12.2067C1.00312 12.078 1.1253 11.9778 1.26826 11.9186C1.41122 11.8594 1.56852 11.8439 1.72029 11.8741C1.87205 11.9042 2.01145 11.9787 2.12087 12.0881C2.23028 12.1975 2.30479 12.3369 2.33498 12.4886C2.36517 12.6404 2.34967 12.7976 2.29046 12.9406C2.23124 13.0835 2.13097 13.2056 2.00231 13.2916C1.87365 13.3775 1.72239 13.4234 1.56766 13.4234C1.36022 13.4232 1.16135 13.3407 1.01467 13.1941C0.867998 13.0474 0.785505 12.8486 0.785298 12.6412ZM4.69708 17.3344C4.54235 17.3344 4.39109 17.2885 4.26243 17.2025C4.13377 17.1166 4.0335 16.9944 3.97428 16.8515C3.91507 16.7086 3.89957 16.5513 3.92976 16.3996C3.95995 16.2479 4.03446 16.1085 4.14387 15.9991C4.25329 15.8897 4.39269 15.8152 4.54445 15.785C4.69622 15.7548 4.85352 15.7703 4.99648 15.8295C5.13944 15.8887 5.26162 15.989 5.34759 16.1176C5.43356 16.2462 5.47944 16.3975 5.47944 16.5522C5.47924 16.7596 5.39674 16.9584 5.25007 17.105C5.10339 17.2517 4.90452 17.3342 4.69708 17.3344ZM13.303 17.3344C13.1483 17.3344 12.997 17.2885 12.8684 17.2025C12.7397 17.1166 12.6394 16.9944 12.5802 16.8515C12.521 16.7086 12.5055 16.5513 12.5357 16.3996C12.5659 16.2479 12.6404 16.1085 12.7498 15.9991C12.8592 15.8897 12.9986 15.8152 13.1504 15.785C13.3021 15.7548 13.4595 15.7703 13.6024 15.8295C13.7454 15.8887 13.8676 15.989 13.9535 16.1176C14.0395 16.2462 14.0854 16.3975 14.0854 16.5522C14.0851 16.7596 14.0026 16.9584 13.856 17.105C13.7093 17.2516 13.5104 17.3341 13.303 17.3344ZM16.4324 13.4234C16.2777 13.4234 16.1264 13.3775 15.9978 13.2916C15.8691 13.2056 15.7689 13.0835 15.7096 12.9406C15.6504 12.7976 15.6349 12.6404 15.6651 12.4886C15.6953 12.3369 15.7698 12.1975 15.8792 12.0881C15.9887 11.9787 16.1281 11.9042 16.2798 11.8741C16.4316 11.8439 16.5889 11.8594 16.7318 11.9186C16.8748 11.9778 16.997 12.078 17.083 12.2067C17.1689 12.3353 17.2148 12.4865 17.2148 12.6412C17.2146 12.8486 17.1321 13.0474 16.9854 13.194C16.8387 13.3407 16.6399 13.4232 16.4324 13.4234Z" fill={color} />
            <defs>
                <linearGradient id="paint0_linear_533_1600" x1="2.02651" y1="2.1493" x2="15.9706" y2="16.0964" gradientUnits="userSpaceOnUse">
                    <stop stop-color={color} />
                    <stop offset="1" stop-color={color} />
                </linearGradient>
            </defs>
        </svg>
    );
}