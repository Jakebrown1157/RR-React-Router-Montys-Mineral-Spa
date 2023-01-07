

export default function Packages(Props) {

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                {Props.packages.map((eachPackage, index) => <li key={index}>{eachPackage}</li>)}
            </div>
        </div>
    )
}