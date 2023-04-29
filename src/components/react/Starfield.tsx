export default function Starfield() {

    // Build an SVG starfield
    const starsConfig = [
        { starCount: 2000, starfieldSpread: 1280, starSize: StarSize.XS },
        { starCount: 200, starfieldSpread: 640, starSize: StarSize.SM },
        { starCount: 20, starfieldSpread: 320, starSize: StarSize.MD },
        { starCount: 5, starfieldSpread: 180, starSize: StarSize.LG }
    ];
    const [canvasWidth, canvasHeight] = [1440, 720];

    // The array of stars to be rendered
    let starfield: Star[] = [];

    starsConfig.forEach((starConfig) => {
        let randomStars: Star[] = generateRandomStars(
            starConfig.starCount,
            starConfig.starfieldSpread,
            canvasWidth,
            canvasHeight,
            starConfig.starSize,
        );
        starfield = starfield.concat(randomStars);
    });

    // Build an SVG group element for each star in the starfield
    const starGroups = starfield.map(star =>
        // <g transform="translate({star.location.x}, {star.location.y})"><use xlinkHref="#star-xs"/></g>
        <g transform={"translate(".concat(star.location.x.toString().concat(",").concat(star.location.y.toString()).concat(")"))}>
            <use xlinkHref={"#".concat(star.size)} />
        </g>
    )
    // Return an SVG image populated with random stars of configured sizes
    return (
        <div>
            <svg className=""
                id="starfield2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={"-180 180 ".concat(canvasWidth.toString()).concat(" ").concat(canvasHeight.toString())}
            >
                <defs>
                    <radialGradient id="rg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="30%" stopColor="#FFFCEE"></stop>
                        <stop offset="60%" stopColor="#FFFCEA"></stop>
                        <stop offset="90%" stopColor="#FCE6AE"></stop>
                    </radialGradient>
                    <linearGradient id="lg" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="20%" stopColor="#FCE6AE"></stop>
                        <stop offset="30%" stopColor="#DDD"></stop>
                        <stop offset="40%" stopColor="#FCE6AE"></stop>
                        <stop offset="50%" stopColor="#DDD"></stop>
                        <stop offset="60%" stopColor="#FCE6AE"></stop>
                        <stop offset="70%" stopColor="#DDD"></stop>
                        <stop offset="80%" stopColor="#FCE6AE"></stop>
                        <stop offset="100%" stopColor="#DDD"></stop>
                    </linearGradient>
                    <filter id="f">
                        <feGaussianBlur in="SourceGraphic" stdDeviation=".9"
                        ></feGaussianBlur>
                    </filter>
                    <circle id="core" cx="0" cy="0" r="5" fill="url(#rg)"></circle>
                    <path
                        id="spike-sm"
                        fill="url(#lg)"
                        d="M0-25Q0 0 1 0 0 0 0 25 0 0-1 0q1 0 1-25"
                        transform="rotate(90)"></path>
                    <path
                        id="spike-lg"
                        fill="url(#lg)"
                        d="M0-40Q0 0 1 0 0 0 0 40 0 0-1 0q1 0 1-40"
                        transform="rotate(90)"></path>
                    <g id="cross">
                        <use xlinkHref="#spike-lg"></use>
                        <use xlinkHref="#spike-lg" transform="rotate(90)"></use>
                    </g>
                    <g id="qcross">
                        <use xlinkHref="#spike-sm" transform="rotate(45)"></use>
                        <use xlinkHref="#spike-sm" transform="rotate(-45)"></use>
                    </g>
                    <g id="star-lg" transform="scale(1)" fillOpacity=".75">
                        <use xlinkHref="#cross"></use>
                        <use xlinkHref="#qcross"></use>
                        <use xlinkHref="#core" filter="url(#f)"></use>
                    </g>
                    <g id="star-md" transform="scale(.7)" fillOpacity=".5">
                        <use xlinkHref="#qcross"></use>
                        <use xlinkHref="#core" filter="url(#f)" transform="scale(.5)"></use>
                    </g>
                    <g id="star-sm" transform="scale(.3)" fillOpacity=".5">
                        <use xlinkHref="#core" filter="url(#f)"></use>
                    </g>
                    <g id="star-xs" transform="scale(.1)" fillOpacity=".5">
                        <use xlinkHref="#core" filter="url(#f)"></use>
                    </g>
                </defs>
                {starGroups}
            </svg>
        </div>
    )
}

/** A point location to be placed within a parent element */
interface Point {
    /** x coordinate in the parent element */
    x: number;
    /** y coordinate in the parent element */
    y: number;
}

/**
 * The list of defined star sizes
 */
enum StarSize {
    XS = "star-xs",
    SM = "star-sm",
    MD = "star-md",
    LG = "star-lg",
}

/**
 * A Star object with x,y coordinates and an optional size
 */
interface Star {
    /** The x,y location of the star */
    location: Point;
    /** The star size */
    size?: StarSize;
}

/**
 * Get a randomly placed point
 * @param x {number} - The x coordinate axis
 * @param y {number} - The y coordinate axis
 * @param stdDev {number} - The desired standard deviation from the mean
 * @returns point {Point} - The randomly placed point
 */
function getRandomPoint(x: number, y: number, stdDev: number): Point {
    let mean: number = y;

    /**
     * Return a psuedo random number from a Gaussian distribution
     */
    function gaussian(): number {
        let u1 = Math.random(),
            u2 = Math.random();
        return Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);
    }

    let deltaX: number = stdDev * gaussian(); // random deviation from the mean in x direction
    let deltaY: number = stdDev * gaussian(); // random deviation from the mean in y direction

    let point: Point = {
        x: x + deltaX,
        y: y + deltaY,
    };
    return point;
}

/**
 *
 * @param numStars {number} - The number of stars to generate
 * @param stdDev {number} - The standard deviation from the mean of the line (starfield spread)
 * @param canvasWidth {number} - The width of the parent element
 * @param canvasHeight {number} - The height of the parent element
 * @param size {StarSize} - The size of the star
 * @returns stars {Star[]} - The array of generated stars
 */
function generateRandomStars(
    numStars: number,
    stdDev: number,
    canvasWidth: number,
    canvasHeight: number,
    size: StarSize,
): Star[] {
    let stars: Array<Star> = [];

    for (let i: number = 0; i < numStars; i++) {
        let x: number = Math.random() * canvasWidth;
        let y: number = Math.random() * canvasHeight;

        // create a line with slope 1 and y-intercept -x
        let meanY: number = x + canvasHeight / 2;
        let point: Point = getRandomPoint(x, meanY, stdDev);
        let star: Star = { "location": point, "size": size }
        stars.push(star);
    }
    return stars;
}

/**
 * Render an array of stars into the parent SVG element
 * Examples:
 * <!-- <g transform="translate(50,50)"><use xlinkHref="#star-lg"/></g> -->
 * <!-- <g transform="translate(80,80)"><use xlinkHref="#star-md"/></g> -->
 * <!-- <g transform="translate(30,80)"><use xlinkHref="#star-sm"/></g> -->
 * <!-- <g transform="translate(20,20)"><use xlinkHref="#star-xs"/></g> -->
 * @param stars {Star[]} - The array of stars to render
 */
function renderStars(stars: Star[]): void {
    let starfield: Element = document.querySelector("#starfield");
    let x: number,
        y: number = 0;

    stars.forEach((star: Star) => {
        // Create an SVG <use> element that refers to a star type in the SVG <defs>

        let starElement: Element = document.createElement("use");
        starElement.setAttribute(
            "xlinkHref",
            "#".concat(star.size != undefined ? star.size : StarSize.XS),
        );

        // Set the star coordinates, default to off canvas
        x = typeof star.location.x === "number" ? star.location.x : -9999; // default position off the canvas
        y = typeof star.location.y === "number" ? star.location.y : -9999; // default position off the canvas

        let starGroup: Element = document.createElement("g");
        starGroup.setAttribute(
            "transform",
            "translate("
                .concat(x.toString())
                .concat(",")
                .concat(y.toString())
                .concat(")"),
        );
        starfield.append(starGroup);
    });
}
