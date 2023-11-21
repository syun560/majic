import React from "react"

export const Ala : React.FC = () => {
    return (
    <div className="alert alert-primary mt-3 alert-dismissible fade show" role="alert">
        <li>四人麻雀の点数計算（切り上げ満貫なし）を想定しています。</li>
        <li>データの正確性については制作中のため保証できません。本サイトを利用しての損害については責任を負いません。</li>
        <li>データ、計算結果の誤り、不足等は<a href="https://github.com/syun560/majic" className="alert-link">GitHub</a>にてご連絡ください。</li>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
    )
}