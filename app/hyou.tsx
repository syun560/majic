

const hyou = () => {
    // 取得する情報が変化する

    const hheader = [
        "点差(子)", "点差(親)", "和了点数", "確率"
    ]

    return (
        <table className="table table-sm mt-3 table-bordered">
            <thead className="thead-light">
                <tr>
                    {hheader.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {points.map((h, i) => {
                    const tensa_child = h.child * 2 + h.parent + h.child + tenbou * 1000 + honba * 400
                    const tensa_parent = h.child * 2 + h.parent + h.parent + tenbou * 1000 + honba * 400
                    return (
                        <tr key={i}>
                            <td className="text-danger">{tensa_child}</td>
                            <td>{tensa_parent}  </td>
                            <td>{h.aka}({h.child}-{h.parent})</td>
                            <td>{h.rate * 100} %</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};