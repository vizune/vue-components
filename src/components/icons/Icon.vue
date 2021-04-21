<script>
    const defaultStyle = {
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'middle',
        width: '1em',
        height: '1em',
        fill: 'none',
        stroke: '#000',
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
    }
    
    const Icon  = {
        props: {
            width: [Number, String],
            height: [Number, String],
            viewBox: {
                type: String,
                default: "0 0 24 24"
            },
            color: String
        },
        render(h) {
            let style = defaultStyle;

            if(this.color) style = {...style, stroke: this.color};
            if(this.width) style = {...style, width: isNaN(Number(this.width)) ? this.width : `${this.width}px`};
            if(this.height) style = {...style, height: isNaN(Number(this.height)) ? this.height : `${this.height}px`}
            
            return(
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={this.viewBox}
                style={style}
                >
                    {this.$slots.default}
                </svg>
            )
        }

    }

    const Wrapper = ({data, slots}) => (
        <Icon {...data} style={data.data.style || data.data.staticStyle} class={data.data.class || data.data.staticClass}>
            {slots().default}
        </Icon>
    )

    export default Icon;

    export const Activity = props => (
        <Wrapper {...props} class="feather feather-activity">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </Wrapper>
    )

    export const Airplay = props => (
        <Wrapper {...props} class="feather feather-airplay">
            <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"/>
            <path d="M12 15l5 6H7l5-6z"/>
        </Wrapper>
    )

    export const AlertCircle = props => (
        <Wrapper {...props} class="feather feather-alert-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M12 8v4M12 16h.01"/>
        </Wrapper>
    )

    export const AlertOctagon = props => (
        <Wrapper {...props} class="feather feather-alert-octagon">
            <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01"/>
        </Wrapper>
    )

    export const AlertTriangle = props => (
        <Wrapper {...props} class="feather feather-alert-triangle">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/>
        </Wrapper>
    )
    
    export const AlignCenter = props => (
        <Wrapper {...props} class="feather feather-align-center">
            <path d="M18 10H6M21 6H3M21 14H3M18 18H6"/>
        </Wrapper>
    )

    export const AlignJustify = props => (
        <Wrapper {...props} class="feather feather-align-justify">
            <path d="M21 10H3M21 6H3M21 14H3M21 18H3"/>
        </Wrapper>
    )

    export const AlignLeft = props => (
        <Wrapper {...props} class="feather feather-align-left">
            <path d="M17 10H3M21 6H3M21 14H3M17 18H3"/>
        </Wrapper>
    )

    export const AlignRight = props => (
        <Wrapper {...props} class="feather feather-align-right">
            <path d="M21 10H7M21 6H3M21 14H3M21 18H7"/>
        </Wrapper>
    )

    export const Anchor = props => (
        <Wrapper {...props} class="feather feather-anchor">
            <path d="M9 5a3 3 0 106 0 3 3 0 10-6 0M12 22V8m-7 4H2a10 10 0 0020 0h-3"/>
        </Wrapper>
    )

    export const Aperture = props => (
        <Wrapper {...props} class="feather feather-aperture">
            <path d="M2 12a10 10 0 1020 0 10 10 0 10-20 0M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
        </Wrapper>
    )

    export const Archive = props => (
        <Wrapper {...props} class="feather feather-archive">
            <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>
        </Wrapper>
    )

    export const ArrowDownCircle = props => (
        <Wrapper {...props} class="feather feather-arrow-down-circle">
            <path d="M2 12a10 10 0 1020 0 10 10 0 10-20 0"/><path d="M8 12l4 4 4-4m-4-4v8"/>
        </Wrapper>
    )

    export const ArrowDownLeft = props => (
        <Wrapper {...props} class="feather feather-arrow-down-left">
            <path d="M17 7L7 17M17 17H7V7"/>
        </Wrapper>
    )

    export const ArrowDownRight = props => (
        <Wrapper {...props} class="feather feather-arrow-down-right">
            <path d="M7 7l10 10M17 7v10H7"/>
        </Wrapper>
    )

    export const ArrowDown = props => (
        <Wrapper {...props} class="feather feather-arrow-down">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
        </Wrapper>
    )

    export const ArrowLeftCircle = props => (
        <Wrapper {...props} class="feather feather-arrow-left-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M12 8l-4 4 4 4M16 12H8"/>
        </Wrapper>
    )

    export const ArrowLeft = props => (
        <Wrapper {...props} class="feather feather-arrow-left">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </Wrapper>
    )

    export const ArrowRightCircle = props => (
        <Wrapper {...props} class="feather feather-arrow-right-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M12 16l4-4-4-4M8 12h8"/>
        </Wrapper>
    )

    export const ArrowRight = props => (
        <Wrapper {...props} class="feather feather-arrow-right">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </Wrapper>
    )

    export const ArrowUpCircle = props => (
        <Wrapper {...props} class="feather feather-arrow-up-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M16 12l-4-4-4 4M12 16V8"/>
        </Wrapper>
    )

    export const ArrowUpLeft = props => (
        <Wrapper {...props} class="feather feather-arrow-up-left">
            <path d="M17 17L7 7M7 17V7h10"/>
        </Wrapper>
    )

    export const ArrowUpRight = props => (
        <Wrapper {...props} class="feather feather-arrow-up-right">
            <path d="M7 17L17 7M7 7h10v10"/>
        </Wrapper>
    )

    export const ArrowUp = props => (
        <Wrapper {...props} class="feather feather-arrow-up">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </Wrapper>
    )

    export const AtSign = props => (
        <Wrapper {...props} class="feather feather-at-sign">
            <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0"/>
            <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"/>
        </Wrapper>
    )

    export const Award = props => (
        <Wrapper {...props} class="feather feather-award">
            <path d="M5 8a7 7 0 1014 0A7 7 0 105 8"/>
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
        </Wrapper>
    )

    export const BarChart = props => (
        <Wrapper {...props} class="feather feather-bar-chart">
            <path d="M12 20V10M18 20V4M6 20v-4"/>
        </Wrapper>
    )

    export const BarChart2 = props => (
        <Wrapper {...props} class="feather feather-bar-chart-2">
            <path d="M18 20V10M12 20V4M6 20v-6"/>
        </Wrapper>
    )

    export const BatteryCharging = props => (
        <Wrapper {...props} class="feather feather-battery-charging">
            <path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6"/>
        </Wrapper>
    )

    export const Battery = props => (
        <Wrapper {...props} class="feather feather-battery">
            <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
            <path d="M23 13v-2"/>
        </Wrapper>
    )

    export const Bell = props => (
        <Wrapper {...props} class="feather feather-bell">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
        </Wrapper>
    )

    export const BellOff = props => (
        <Wrapper {...props} class="feather feather-bell-off">
            <path d="M13.73 21a2 2 0 01-3.46 0M18.63 13A17.89 17.89 0 0118 8M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14M18 8a6 6 0 00-9.33-5M1 1l22 22"/>
        </Wrapper>
    )

    export const Bluetooth = props => (
        <Wrapper {...props} class="feather feather-bluetooth">
            <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"/>
        </Wrapper>
    )

    export const Bold = props => (
        <Wrapper {...props} class="feather feather-bold">
            <path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6zM6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"/>
        </Wrapper>
    )

    export const BookOpen = props => (
        <Wrapper {...props} class="feather feather-book-open">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
        </Wrapper>
    )

    export const Book = props => (
        <Wrapper {...props} class="feather feather-book">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
        </Wrapper>
    )

    export const Bookmark = props => (
        <Wrapper {...props} class="feather feather-bookmark">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
        </Wrapper>
    )

    export const Box = props => (
        <Wrapper {...props} class="feather feather-box">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
        </Wrapper>
    )

    export const Briefcase = props => (
        <Wrapper {...props} class="feather feather-briefcase">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
        </Wrapper>
    )

    export const Calendar = props => (
        <Wrapper {...props} class="feather feather-calendar">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <path d="M16 2v4M8 2v4M3 10h18"/>
        </Wrapper>
    )

    export const CameraOff = props => (
        <Wrapper {...props} class="feather feather-camera-off">
            <path d="M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56"/>
        </Wrapper>
    )

    export const Camera = props => (
        <Wrapper {...props} class="feather feather-camera">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
            <path d="M8,13a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
        </Wrapper>
    )

    export const Cast = props => (
        <Wrapper {...props} class="feather feather-cast">
            <path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6M2 20h.01"/>
        </Wrapper>
    )

    export const CheckCircle = props => (
        <Wrapper {...props} class="feather feather-check-circle">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <path d="M22 4L12 14.01l-3-3"/>
        </Wrapper>
    )

    export const CheckSquare = props => (
        <Wrapper {...props} class="feather feather-check-square">
            <path d="M9 11l3 3L22 4"/>
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
        </Wrapper>
    )

    export const Check = props => (
        <Wrapper {...props} class="feather feather-check">
            <path d="M20 6L9 17l-5-5"/>
        </Wrapper>
    )

    export const ChevronDown = props => (
        <Wrapper {...props} class="feather feather-chevron-down">
            <path d="M6 9l6 6 6-6"/>
        </Wrapper>
    )

    export const ChevronLeft = props => (
        <Wrapper {...props} class="feather feather-chevron-left">
            <path d="M15 18l-6-6 6-6"/>
        </Wrapper>
    )

    export const ChevronRight = props => (
        <Wrapper {...props} class="feather feather-chevron-right">
            <path d="M9 18l6-6-6-6"/>
        </Wrapper>
    )

    export const ChevronUp = props => (
        <Wrapper {...props} class="feather feather-chevron-up">
            <path d="M18 15l-6-6-6 6"/>
        </Wrapper>
    )

    export const ChevronsDown = props => (
        <Wrapper {...props} class="feather feather-chevrons-down">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </Wrapper>
    )

    export const ChevronsLeft = props => (
        <Wrapper {...props} class="feather feather-chevrons-left">
            <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>
        </Wrapper>
    )

    export const ChevronsRight = props => (
        <Wrapper {...props} class="feather feather-chevrons-right">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
        </Wrapper>
    )

    export const ChevronsUp = props => (
        <Wrapper {...props} class="feather feather-chevrons-up">
            <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/>
        </Wrapper>
    )

    export const Chrome = props => (
        <Wrapper {...props} class="feather feather-chrome">
            <path d="M2 12a10 10 0 1020 0 10 10 0 10-20 0"/>
            <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0M21.17 8H12M3.95 6.06L8.54 14m2.34 7.94L15.46 14"/>
        </Wrapper>
    )

    export const CircleIcon = props => (
        <Wrapper {...props} class="feather feather-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
        </Wrapper>
    )

    export const Clipboard = props => (
        <Wrapper {...props} class="feather feather-clipboard">
            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
        </Wrapper>
    )

    export const Clock = props => (
        <Wrapper {...props} class="feather feather-clock">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M12 6v6l4 2"/>
        </Wrapper>
    )

    export const CloudDrizzle = props => (
        <Wrapper {...props} class="feather feather-cloud-drizzle">
            <path d="M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/>
        </Wrapper>
    )

    export const CloudLightning = props => (
        <Wrapper {...props} class="feather feather-cloud-lightning">
            <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/>
            <path d="M13 11l-4 6h6l-4 6"/>
        </Wrapper>
    )

    export const CloudOff = props => (
        <Wrapper {...props} class="feather feather-cloud-off">
            <path d="M22.61 16.95A5 5 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3M1 1l22 22"/>
        </Wrapper>
    )

    export const CloudRain = props => (
        <Wrapper {...props} class="feather feather-cloud-rain">
            <path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/>
        </Wrapper>
    )

    export const CloudSnow = props => (
        <Wrapper {...props} class="feather feather-cloud-snow">
            <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01"/>
        </Wrapper>
    )

    export const Cloud = props => (
        <Wrapper {...props} class="feather feather-cloud">
            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
        </Wrapper>
    )

    export const Code = props => (
        <Wrapper {...props} class="feather feather-code">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
        </Wrapper>
    )

    export const Codepen = props => (
        <Wrapper {...props} class="feather feather-codepen">
            <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5"/>
            <path d="M22 8.5l-10 7-10-7"/>
            <path d="M2 15.5l10-7 10 7M12 2v6.5"/>
        </Wrapper>
    )

    export const Codesandbox = props => (
        <Wrapper {...props} class="feather feather-codesandbox">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            <path d="M7.5 4.21l4.5 2.6 4.5-2.6M7.5 19.79V14.6L3 12M21 12l-4.5 2.6v5.19M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
        </Wrapper>
    )

    export const Coffee = props => (
        <Wrapper {...props} class="feather feather-coffee">
            <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>
        </Wrapper>
    )

    export const Columns = props => (
        <Wrapper {...props} class="feather feather-columns">
            <path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"/>
        </Wrapper>
    )

    export const Command = props => (
        <Wrapper {...props} class="feather feather-command">
            <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z"/>
        </Wrapper>
    )

    export const Compass = props => (
        <Wrapper {...props} class="feather feather-compass">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
        </Wrapper>
    )

    export const Copy = props => (
        <Wrapper {...props} class="feather feather-copy">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </Wrapper>
    )

    export const CornerDownLeft = props => (
        <Wrapper {...props} class="feather feather-corner-down-left">
            <path d="M9 10l-5 5 5 5"/>
            <path d="M20 4v7a4 4 0 01-4 4H4"/>
        </Wrapper>
    )

    export const CornerDownRight = props => (
        <Wrapper {...props} class="feather feather-corner-down-right">
            <path d="M15 10l5 5-5 5"/>
            <path d="M4 4v7a4 4 0 004 4h12"/>
        </Wrapper>
    )

    export const CornerLeftDown = props => (
        <Wrapper {...props} class="feather feather-corner-left-down">
            <path d="M14 15l-5 5-5-5"/>
            <path d="M20 4h-7a4 4 0 00-4 4v12"/>
        </Wrapper>
    )

    export const CornerLeftUp = props => (
        <Wrapper {...props} class="feather feather-corner-left-up">
            <path d="M14 9L9 4 4 9"/>
            <path d="M20 20h-7a4 4 0 01-4-4V4"/>
        </Wrapper>
    )

    export const CornerRightDown = props => (
        <Wrapper {...props} class="feather feather-corner-right-down">
            <path d="M10 15l5 5 5-5"/>
            <path d="M4 4h7a4 4 0 014 4v12"/>
        </Wrapper>
    )

    export const CornerRightUp = props => (
        <Wrapper {...props} class="feather feather-corner-right-up">
            <path d="M10 9l5-5 5 5"/>
            <path d="M4 20h7a4 4 0 004-4V4"/>
        </Wrapper>
    )

    export const CornerUpLeft = props => (
        <Wrapper {...props} class="feather feather-corner-up-left">
            <path d="M9 14L4 9l5-5"/>
            <path d="M20 20v-7a4 4 0 00-4-4H4"/>
        </Wrapper>
    )

    export const CornerUpRight = props => (
        <Wrapper {...props} class="feather feather-corner-up-right">
            <path d="M15 14l5-5-5-5"/>
            <path d="M4 20v-7a4 4 0 014-4h12"/>
        </Wrapper>
    )

    export const Cpu = props => (
        <Wrapper {...props} class="feather feather-cpu">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
            <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
        </Wrapper>
    )

    export const CreditCard = props => (
        <Wrapper {...props} class="feather feather-credit-card">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <path d="M1 10h22"/>
        </Wrapper>
    )

    export const Crop = props => (
        <Wrapper {...props} class="feather feather-crop">
            <path d="M6.13 1L6 16a2 2 0 002 2h15"/>
            <path d="M1 6.13L16 6a2 2 0 012 2v15"/>
        </Wrapper>
    )

    export const Crosshair = props => (
        <Wrapper {...props} class="feather feather-crosshair">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4"/>
        </Wrapper>
    )

    export const Database = props => (
        <Wrapper {...props} class="feather feather-database">
            <path d="M3,5a9,3 0 1,0 18,0a9,3 0 1,0 -18,0"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </Wrapper>
    )

    export const Delete = props => (
        <Wrapper {...props} class="feather feather-delete">
            <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2zM18 9l-6 6M12 9l6 6"/>
        </Wrapper>
    )

    export const Disc = props => (
        <Wrapper {...props} class="feather feather-disc">
            <path d="M2,5a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M9,5a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
        </Wrapper>
    )

    export const DollarSign = props => (
        <Wrapper {...props} class="feather feather-dollar-sign">
            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </Wrapper>
    )

    export const DownloadCloud = props => (
        <Wrapper {...props} class="feather feather-download-cloud">
            <path d="M8 17l4 4 4-4M12 12v9"/>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/>
        </Wrapper>
    )

    export const Download = props => (
        <Wrapper {...props} class="feather feather-download">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </Wrapper>
    )

    export const Droplet = props => (
        <Wrapper {...props} class="feather feather-droplet">
            <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
        </Wrapper>
    )

    export const Edit2 = props => (
        <Wrapper {...props} class="feather feather-edit-2">
            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
        </Wrapper>
    )

    export const Edit3 = props => (
        <Wrapper {...props} class="feather feather-edit-3">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </Wrapper>
    )

    export const Edit = props => (
        <Wrapper {...props} class="feather feather-edit">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </Wrapper>
    )

    export const ExternalLink = props => (
        <Wrapper {...props} class="feather feather-external-link">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
        </Wrapper>
    )

    export const EyeOff = props => (
        <Wrapper {...props} class="feather feather-eye-off">
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/>
        </Wrapper>
    )

    export const Eye = props => (
        <Wrapper {...props} class="feather feather-eye">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><path d="M9,12a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
        </Wrapper>
    )

    export const Facebook = props => (
        <Wrapper {...props} class="feather feather-facebook">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </Wrapper>
    )

    export const FastForward = props => (
        <Wrapper {...props} class="feather feather-fast-forward">
            <path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z"/>
        </Wrapper>
    )

    export const Feather = props => (
        <Wrapper {...props} class="feather feather-feather">
            <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9"/>
        </Wrapper>
    )

    export const Figma = props => (
        <Wrapper {...props} class="feather feather-figma">
            <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2z"/>
            <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0zM5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0zM5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"/>
        </Wrapper>
    )

    export const FileMinus = props => (
        <Wrapper {...props} class="feather feather-file-minus">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <path d="M14 2v6h6M9 15h6"/>
        </Wrapper>
    )

    export const FilePlus = props => (
        <Wrapper {...props} class="feather feather-file-plus">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <path d="M14 2v6h6M12 18v-6M9 15h6"/>
        </Wrapper>
    )

    export const FileText = props => (
        <Wrapper {...props} class="feather feather-file-text">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </Wrapper>
    )

    export const File = props => (
        <Wrapper {...props} class="feather feather-file">
            <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
            <path d="M13 2v7h7"/>
        </Wrapper>
    )

    export const Film = props => (
        <Wrapper {...props} class="feather feather-film">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
            <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>
        </Wrapper>
    )

    export const FilterIcon = props => (
        <Wrapper {...props} class="feather feather-filter">
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
        </Wrapper>
    )

    export const Flag = props => (
        <Wrapper {...props} class="feather feather-flag">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>
        </Wrapper>
    )

    export const FolderMinus = props => (
        <Wrapper {...props} class="feather feather-folder-minus">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2zM9 14h6"/>
        </Wrapper>
    )

    export const FolderPlus = props => (
        <Wrapper {...props} class="feather feather-folder-plus">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2zM12 11v6M9 14h6"/>
        </Wrapper>
    )

    export const Folder = props => (
        <Wrapper {...props} class="feather feather-folder">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
        </Wrapper>
    )

    export const Framer = props => (
        <Wrapper {...props} class="feather feather-framer">
            <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"/>
        </Wrapper>
    )

    export const Frown = props => (
        <Wrapper {...props} class="feather feather-frown">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01"/>
        </Wrapper>
    )

    export const Gift = props => (
        <Wrapper {...props} class="feather feather-gift">
            <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
        </Wrapper>
    )

    export const GitBranch = props => (
        <Wrapper {...props} class="feather feather-git-branch">
            <path d="M6 3v12"/>
            <path d="M15,6a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M3,18a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M18 9a9 9 0 01-9 9"/>
        </Wrapper>
    )

    export const GitCommit = props => (
        <Wrapper {...props} class="feather feather-git-commit">
            <path d="M8,12a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M1.05 12H7M17.01 12h5.95"/>
        </Wrapper>
    )

    export const GitMerge = props => (
        <Wrapper {...props} class="feather feather-git-merge">
            <path d="M15,18a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M3,6a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M6 21V9a9 9 0 009 9"/>
        </Wrapper>
    )

    export const GitPullRequest = props => (
        <Wrapper {...props} class="feather feather-git-pull-request">
            <path d="M15,18a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M3,6a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M13 6h3a2 2 0 012 2v7M6 9v12"/>
        </Wrapper>
    )

    export const Github = props => (
        <Wrapper {...props} class="feather feather-github">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
        </Wrapper>
    )

    export const Gitlab = props => (
        <Wrapper {...props} class="feather feather-gitlab">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
        </Wrapper>
    )

    export const Globe = props => (
        <Wrapper {...props} class="feather feather-globe">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </Wrapper>
    )

    export const Grid = props => (
        <Wrapper {...props} class="feather feather-grid">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
        </Wrapper>
    )

    export const HardDrive = props => (
        <Wrapper {...props} class="feather feather-hard-drive">
            <path d="M22 12H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11zM6 16h.01M10 16h.01"/>
        </Wrapper>
    )

    export const Hash = props => (
        <Wrapper {...props} class="feather feather-hash">
            <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>
        </Wrapper>
    )

    export const Headphones = props => (
        <Wrapper {...props} class="feather feather-headphones">
            <path d="M3 18v-6a9 9 0 0118 0v6"/>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
        </Wrapper>
    )

    export const Heart = props => (
        <Wrapper {...props} class="feather feather-heart">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </Wrapper>
    )

    export const HelpCircle = props => (
        <Wrapper {...props} class="feather feather-help-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
        </Wrapper>
    )

    export const Hexagon = props => (
        <Wrapper {...props} class="feather feather-hexagon">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        </Wrapper>
    )

    export const Home = props => (
        <Wrapper {...props} class="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <path d="M9 22V12h6v10"/>
        </Wrapper>
    )

    export const ImageIcon = props => (
        <Wrapper {...props} class="feather feather-image">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M7,8.5a1.5,1.5 0 1,0 3,0a1.5,1.5 0 1,0 -3,0"/>
            <path d="M21 15l-5-5L5 21"/>
        </Wrapper>
    )

    export const Inbox = props => (
        <Wrapper {...props} class="feather feather-inbox">
            <path d="M22 12h-6l-2 3h-4l-2-3H2"/>
            <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>
        </Wrapper>
    )

    export const Info = props => (
        <Wrapper {...props} class="feather feather-info">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M12 16v-4M12 8h.01"/>
        </Wrapper>
    )

    export const Instagram = props => (
        <Wrapper {...props} class="feather feather-instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
        </Wrapper>
    )

    export const Italic = props => (
        <Wrapper {...props} class="feather feather-italic">
            <path d="M19 4h-9M14 20H5M15 4L9 20"/>
        </Wrapper>
    )

    export const Key = props => (
        <Wrapper {...props} class="feather feather-key">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
        </Wrapper>
    )

    export const Layers = props => (
        <Wrapper {...props} class="feather feather-layers">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </Wrapper>
    )

    export const Layout = props => (
        <Wrapper {...props} class="feather feather-layout">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M3 9h18M9 21V9"/>
        </Wrapper>
    )

    export const LifeBuoy = props => (
        <Wrapper {...props} class="feather feather-life-buoy">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M8,12a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24"/>
        </Wrapper>
    )

    export const Link = props => (
        <Wrapper {...props} class="feather feather-link">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
        </Wrapper>
    )

    export const Link2 = props => (
        <Wrapper {...props} class="feather feather-link-2">
            <path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3M8 12h8"/>
        </Wrapper>
    )

    export const Linkedin = props => (
        <Wrapper {...props} class="feather feather-linkedin">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <path d="M2,4a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"/>
        </Wrapper>
    )

    export const List = props => (
        <Wrapper {...props} class="feather feather-list">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
        </Wrapper>
    )

    export const Loader = props => (
        <Wrapper {...props} class="feather feather-loader">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </Wrapper>
    )

    export const Lock = props => (
        <Wrapper {...props} class="feather feather-lock">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
        </Wrapper>
    )

    export const LogIn = props => (
        <Wrapper {...props} class="feather feather-log-in">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
        </Wrapper>
    )

    export const LogOut = props => (
        <Wrapper {...props} class="feather feather-log-out">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
        </Wrapper>
    )

    export const Mail = props => (
        <Wrapper {...props} class="feather feather-mail">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <path d="M22 6l-10 7L2 6"/>
        </Wrapper>
    )

    export const MapPin = props => (
        <Wrapper {...props} class="feather feather-map-pin">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <path d="M9,10a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
        </Wrapper>
    )

    export const Map = props => (
        <Wrapper {...props} class="feather feather-map">
            <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16"/>
        </Wrapper>
    )

    export const Maximize = props => (
        <Wrapper {...props} class="feather feather-maximize">
            <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
        </Wrapper>
    )

    export const Maximize2 = props => (
        <Wrapper {...props} class="feather feather-maximize-2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </Wrapper>
    )

    export const Meh = props => (
        <Wrapper {...props} class="feather feather-meh">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M8 15h8M9 9h.01M15 9h.01"/>
        </Wrapper>
    )

    export const Menu = props => (
        <Wrapper {...props} class="feather feather-menu">
            <path d="M3 12h18M3 6h18M3 18h18"/>
        </Wrapper>
    )

    export const MessageCircle = props => (
        <Wrapper {...props} class="feather feather-message-circle">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
        </Wrapper>
    )

    export const MessageSquare = props => (
        <Wrapper {...props} class="feather feather-message-square">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </Wrapper>
    )

    export const MicOff = props => (
        <Wrapper {...props} class="feather feather-mic-off">
            <path d="M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6"/><path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8"/>
        </Wrapper>
    )

    export const Mic = props => (
        <Wrapper {...props} class="feather feather-mic">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>
        </Wrapper>
    )

    export const Minimize = props => (
        <Wrapper {...props} class="feather feather-minimize">
            <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"/>
        </Wrapper>
    )

    export const Minimize2 = props => (
        <Wrapper {...props} class="feather feather-minimize-2">
            <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/>
        </Wrapper>
    )

    export const MinusCircle = props => (
        <Wrapper {...props} class="feather feather-minus-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M8 12h8"/>
        </Wrapper>
    )

    export const MinusSquare = props => (
        <Wrapper {...props} class="feather feather-minus-square">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M8 12h8"/>
        </Wrapper>
    )

    export const Minus = props => (
        <Wrapper {...props} class="feather feather-minus">
            <path d="M5 12h14"/>
        </Wrapper>
    )

    export const Monitor = props => (
        <Wrapper {...props} class="feather feather-monitor">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <path d="M8 21h8M12 17v4"/>
        </Wrapper>
    )

    export const Moon = props => (
        <Wrapper {...props} class="feather feather-moon">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </Wrapper>
    )

    export const MoreHorizontal = props => (
        <Wrapper {...props} class="feather feather-more-horizontal">
            <path d="M11 12a1 1 0 102 0 1 1 0 10-2 0M18 12a1 1 0 102 0 1 1 0 10-2 0M4 12a1 1 0 102 0 1 1 0 10-2 0"/>
        </Wrapper>
    )

    export const MoreVertical = props => (
        <Wrapper {...props} class="feather feather-more-vertical">
            <path d="M11 12a1 1 0 102 0 1 1 0 10-2 0M11 5a1 1 0 102 0 1 1 0 10-2 0M11 19a1 1 0 102 0 1 1 0 10-2 0"/>
        </Wrapper>
    )

    export const MousePointer = props => (
        <Wrapper {...props} class="feather feather-mouse-pointer">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6"/>
        </Wrapper>
    )

    export const Move = props => (
        <Wrapper {...props} class="feather feather-move">
            <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
        </Wrapper>
    )

    export const Music = props => (
        <Wrapper {...props} class="feather feather-music">
            <path d="M9 18V5l12-2v13M3 18a3 3 0 106 0 3 3 0 10-6 0"/><path d="M15 16a3 3 0 106 0 3 3 0 10-6 0"/>
        </Wrapper>
    )

    export const Navigation = props => (
        <Wrapper {...props} class="feather feather-navigation">
            <path d="M3 11l19-9-9 19-2-8-8-2z"/>
        </Wrapper>
    )

    export const Navigation2 = props => (
        <Wrapper {...props} class="feather feather-navigation-2">
            <path d="M12 2l7 19-7-4-7 4 7-19z"/>
        </Wrapper>
    )

    export const Octagon = props => (
        <Wrapper {...props} class="feather feather-octagon">
            <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"/>
        </Wrapper>
    )

    export const Package = props => (
        <Wrapper {...props} class="feather feather-package">
            <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
        </Wrapper>
    )

    export const Paperclip = props => (
        <Wrapper {...props} class="feather feather-paperclip">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
        </Wrapper>
    )

    export const PauseCircle = props => (
        <Wrapper {...props} class="feather feather-pause-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M10 15V9M14 15V9"/>
        </Wrapper>
    )

    export const Pause = props => (
        <Wrapper {...props} class="feather feather-pause">
            <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
        </Wrapper>
    )

    export const PenTool = props => (
        <Wrapper {...props} class="feather feather-pen-tool">
            <path d="M12 19l7-7 3 3-7 7-3-3z"/>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586"/>
            <path d="M9,11a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"/>
        </Wrapper>
    )

    export const Percent = props => (
        <Wrapper {...props} class="feather feather-percent">
            <path d="M19 5L5 19"/>
            <path d="M4,6.5a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0"/>
            <path d="M15,17.5a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0"/>
        </Wrapper>
    )

    export const PhoneCall = props => (
        <Wrapper {...props} class="feather feather-phone-call">
            <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </Wrapper>
    )

    export const PhoneForwarded = props => (
        <Wrapper {...props} class="feather feather-phone-forwarded">
            <path d="M19 1l4 4-4 4M15 5h8M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </Wrapper>
    )

    export const PhoneIncoming = props => (
        <Wrapper {...props} class="feather feather-phone-incoming">
            <path d="M16 2v6h6M23 1l-7 7M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </Wrapper>
    )

    export const PhoneMissed = props => (
        <Wrapper {...props} class="feather feather-phone-missed">
            <path d="M23 1l-6 6M17 1l6 6M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </Wrapper>
    )

    export const PhoneOff = props => (
        <Wrapper {...props} class="feather feather-phone-off">
            <path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-3.33-2.67m-2.67-3.34a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91M23 1L1 23"/>
        </Wrapper>
    )

    export const PhoneOutgoing = props => (
        <Wrapper {...props} class="feather feather-phone-outgoing">
            <path d="M23 7V1h-6M16 8l7-7M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </Wrapper>
    )

    export const Phone = props => (
        <Wrapper {...props} class="feather feather-phone">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </Wrapper>
    )

    export const PieChart = props => (
        <Wrapper {...props} class="feather feather-pie-chart">
            <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/>
        </Wrapper>
    )

    export const PlayCircle = props => (
        <Wrapper {...props} class="feather feather-play-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M10 8l6 4-6 4V8z"/>
        </Wrapper>
    )

    export const Play = props => (
        <Wrapper {...props} class="feather feather-play">
            <path d="M5 3l14 9-14 9V3z"/>
        </Wrapper>
    )

    export const PlusCircle = props => (
        <Wrapper {...props} class="feather feather-plus-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M12 8v8M8 12h8"/>
        </Wrapper>
    )

    export const PlusSquare = props => (
        <Wrapper {...props} class="feather feather-plus-square">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M12 8v8M8 12h8"/>
        </Wrapper>
    )

    export const Plus = props => (
        <Wrapper {...props} class="feather feather-plus">
            <path d="M12 5v14M5 12h14"/>
        </Wrapper>
    )

    export const Pocket = props => (
        <Wrapper {...props} class="feather feather-pocket">
            <path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z"/>
            <path d="M8 10l4 4 4-4"/>
        </Wrapper>
    )

    export const Power = props => (
        <Wrapper {...props} class="feather feather-power">
            <path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10"/>
        </Wrapper>
    )

    export const Printer = props => (
        <Wrapper {...props} class="feather feather-printer">
            <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
            <path d="M6 14h12v8H6z"/>
        </Wrapper>
    )

    export const Radio = props => (
        <Wrapper {...props} class="feather feather-radio">
            <path d="M10,12a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"/>
            <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>
        </Wrapper>
    )

    export const RefreshCcw = props => (
        <Wrapper {...props} class="feather feather-refresh-ccw">
            <path d="M1 4v6h6M23 20v-6h-6"/>
            <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/>
        </Wrapper>
    )

    export const RefreshCw = props => (
        <Wrapper {...props} class="feather feather-refresh-cw">
            <path d="M23 4v6h-6M1 20v-6h6"/>
            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
        </Wrapper>
    )

    export const Repeat = props => (
        <Wrapper {...props} class="feather feather-repeat">
            <path d="M17 1l4 4-4 4"/>
            <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/>
            <path d="M21 13v2a4 4 0 01-4 4H3"/>
        </Wrapper>
    )

    export const Rewind = props => (
        <Wrapper {...props} class="feather feather-rewind">
            <path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z"/>
        </Wrapper>
    )

    export const RotateCcw = props => (
        <Wrapper {...props} class="feather feather-rotate-ccw">
            <path d="M1 4v6h6"/>
            <path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
        </Wrapper>
    )

    export const RotateCw = props => (
        <Wrapper {...props} class="feather feather-rotate-cw">
            <path d="M23 4v6h-6"/>
            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
        </Wrapper>
    )

    export const Rss = props => (
        <Wrapper {...props} class="feather feather-rss">
            <path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16"/>
            <path d="M4,19a1,1 0 1,0 2,0a1,1 0 1,0 -2,0"/>
        </Wrapper>
    )

    export const Save = props => (
        <Wrapper {...props} class="feather feather-save">
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
            <path d="M17 21v-8H7v8M7 3v5h8"/>
        </Wrapper>
    )

    export const Scissors = props => (
        <Wrapper {...props} class="feather feather-scissors">
            <path d="M3 6a3 3 0 106 0 3 3 0 10-6 0M3 18a3 3 0 106 0 3 3 0 10-6 0M20 4L8.12 15.88m6.35-1.4L20 20M8.12 8.12L12 12"/>
        </Wrapper>
    )

    export const Search = props => (
        <Wrapper {...props} class="feather feather-search">
            <path d="M3 11a8 8 0 1016 0 8 8 0 10-16 0M21 21l-4.35-4.35"/>
        </Wrapper>
    )

    export const Send = props => (
        <Wrapper {...props} class="feather feather-send">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </Wrapper>
    )

    export const Server = props => (
        <Wrapper {...props} class="feather feather-server">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
            <path d="M6 6h.01M6 18h.01"/>
        </Wrapper>
    )

    export const Settings = props => (
        <Wrapper {...props} class="feather feather-settings">
            <path d="M9,12a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </Wrapper>
    )

    export const Share = props => (
        <Wrapper {...props} class="feather feather-share">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
        </Wrapper>
    )

    export const Share2 = props => (
        <Wrapper {...props} class="feather feather-share-2">
            <path d="M15 5a3 3 0 106 0 3 3 0 10-6 0M3 12a3 3 0 106 0 3 3 0 10-6 0M15 19a3 3 0 106 0 3 3 0 10-6 0M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"/>
        </Wrapper>
    )

    export const ShieldOff = props => (
        <Wrapper {...props} class="feather feather-shield-off">
            <path d="M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38M1 1l22 22"/>
        </Wrapper>
    )

    export const Shield = props => (
        <Wrapper {...props} class="feather feather-shield">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </Wrapper>
    )

    export const ShoppingBag = props => (
        <Wrapper {...props} class="feather feather-shopping-bag">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
        </Wrapper>
    )

    export const ShoppingCart = props => (
        <Wrapper {...props} class="feather feather-shopping-cart">
            <path d="M8 21a1 1 0 102 0 1 1 0 10-2 0M19 21a1 1 0 102 0 1 1 0 10-2 0M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </Wrapper>
    )

    export const Shuffle = props => (
        <Wrapper {...props} class="feather feather-shuffle">
            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>
        </Wrapper>
    )

    export const Sidebar = props => (
        <Wrapper {...props} class="feather feather-sidebar">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M9 3v18"/>
        </Wrapper>
    )

    export const Skipback = props => (
        <Wrapper {...props} class="feather feather-skip-back">
            <path d="M19 20L9 12l10-8v16zM5 19V5"/>
        </Wrapper>
    )

    export const SkipForward = props => (
        <Wrapper {...props} class="feather feather-skip-forward">
            <path d="M5 4l10 8-10 8V4zM19 5v14"/>
        </Wrapper>
    )

    export const Slack = props => (
        <Wrapper {...props} class="feather feather-slack">
            <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zM20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zM3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14zM14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5zM15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5zM8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
        </Wrapper>
    )

    export const Slash = props => (
        <Wrapper {...props} class="feather feather-slash">
            <path d="M2 12a10 10 0 1020 0 10 10 0 10-20 0M4.93 4.93l14.14 14.14"/>
        </Wrapper>
    )

    export const Sliders = props => (
        <Wrapper {...props} class="feather feather-sliders">
            <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>
        </Wrapper>
    )

    export const Smartphone = props => (
        <Wrapper {...props} class="feather feather-smartphone">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <path d="M12 18h.01"/>
        </Wrapper>
    )

    export const Smile = props => (
        <Wrapper {...props} class="feather feather-smile">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
        </Wrapper>
    )

    export const Speaker = props => (
        <Wrapper {...props} class="feather feather-speaker">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
            <path d="M8 14a4 4 0 108 0 4 4 0 10-8 0M12 6h.01"/>
        </Wrapper>
    )

    export const Square = props => (
        <Wrapper {...props} class="feather feather-square">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        </Wrapper>
    )

    export const Star = props => (
        <Wrapper {...props} class="feather feather-star">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </Wrapper>
    )

    export const StopCircle = props => (
        <Wrapper {...props} class="feather feather-stop-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/><path d="M9 9h6v6H9z"/>
        </Wrapper>
    )

    export const Sun = props => (
        <Wrapper {...props} class="feather feather-sun">
            <path d="M7 12a5 5 0 1010 0 5 5 0 10-10 0M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </Wrapper>
    )

    export const Sunrise = props => (
        <Wrapper {...props} class="feather feather-sunrise">
            <path d="M17 18a5 5 0 00-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4"/>
        </Wrapper>
    )

    export const Sunset = props => (
        <Wrapper {...props} class="feather feather-sunset">
            <path d="M17 18a5 5 0 00-10 0M12 9V2M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M16 5l-4 4-4-4"/>
        </Wrapper>
    )

    export const Tablet = props => (
        <Wrapper {...props} class="feather feather-tablet">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
            <path d="M12 18h.01"/>
        </Wrapper>
    )

    export const Tag = props => (
        <Wrapper {...props} class="feather feather-tag">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"/>
        </Wrapper>
    )

    export const Target = props => (
        <Wrapper {...props} class="feather feather-">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M6,12a6,6 0 1,0 12,0a6,6 0 1,0 -12,0"/>
            <path d="M10,12a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"/>
        </Wrapper>
    )

    export const Terminal = props => (
        <Wrapper {...props} class="feather feather-terminal">
            <path d="M4 17l6-6-6-6M12 19h8"/>
        </Wrapper>
    )

    export const Thermometer = props => (
        <Wrapper {...props} class="feather feather-thermometer">
            <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>
        </Wrapper>
    )

    export const ThumbsDown = props => (
        <Wrapper {...props} class="feather feather-thumbs-down">
            <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/>
        </Wrapper>
    )

    export const ThumbsUp = props => (
        <Wrapper {...props} class="feather feather-thumbs-up">
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
        </Wrapper>
    )

    export const ToggleLeft = props => (
        <Wrapper {...props} class="feather feather-toggle-left">
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/>
            <path d="M5,12a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
        </Wrapper>
    )

    export const ToggleRight = props => (
        <Wrapper {...props} class="feather feather-toggle-right">
            <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><path d="M13,12a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"/>
        </Wrapper>
    )

    export const Tool = props => (
        <Wrapper {...props} class="feather feather-tool">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </Wrapper>
    )

    export const Trash = props => (
        <Wrapper {...props} class="feather feather-trash">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
        </Wrapper>
    )

    export const Trash2 = props => (
        <Wrapper {...props} class="feather feather-trash-2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
        </Wrapper>
    )

    export const Trello = props => (
        <Wrapper {...props} class="feather feather-trello">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M7 7h3v9H7zM14 7h3v5h-3z"/>
        </Wrapper>
    )

    export const TrendingDown = props => (
        <Wrapper {...props} class="feather feather-trending-down">
            <path d="M23 18l-9.5-9.5-5 5L1 6"/>
            <path d="M17 18h6v-6"/>
        </Wrapper>
    )

    export const TrendingUp = props => (
        <Wrapper {...props} class="feather feather-trending-up">
            <path d="M23 6l-9.5 9.5-5-5L1 18"/>
            <path d="M17 6h6v6"/>
        </Wrapper>
    )

    export const Triangle = props => (
        <Wrapper {...props} class="feather feather-triangle">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        </Wrapper>
    )

    export const Truck = props => (
        <Wrapper {...props} class="feather feather-truck">
            <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/>
            <path d="M3,18.5a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0"/>
            <path d="M16,18.5a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0"/>
        </Wrapper>
    )

    export const Tv = props => (
        <Wrapper {...props} class="feather feather-tv">
           <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
           <path d="M17 2l-5 5-5-5"/>
        </Wrapper>
    )

    export const Twitch = props => (
        <Wrapper {...props} class="feather feather-twitch">
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>
        </Wrapper>
    )

    export const Twitter = props => (
        <Wrapper {...props} class="feather feather-twitter">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </Wrapper>
    )

    export const Type = props => (
        <Wrapper {...props} class="feather feather-type">
            <path d="M4 7V4h16v3M9 20h6M12 4v16"/>
        </Wrapper>
    )

    export const Umbrella = props => (
        <Wrapper {...props} class="feather feather-umbrella">
            <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
        </Wrapper>
    )

    export const Underline = props => (
        <Wrapper {...props} class="feather feather-underline">
            <path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16"/>
        </Wrapper>
    )

    export const Unlock = props => (
        <Wrapper {...props} class="feather feather-unlock">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 019.9-1"/>
        </Wrapper>
    )

    export const UploadCloud = props => (
        <Wrapper {...props} class="feather feather-upload-cloud">
            <path d="M16 16l-4-4-4 4M12 12v9"/>
            <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
            <path d="M16 16l-4-4-4 4"/>
        </Wrapper>
    )

    export const Upload = props => (
        <Wrapper {...props} class="feather feather-upload">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </Wrapper>
    )

    export const UserCheck = props => (
        <Wrapper {...props} class="feather feather-user-check">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <path d="M4.5,7a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M17 11l2 2 4-4"/>
        </Wrapper>
    )

    export const UserMinus = props => (
        <Wrapper {...props} class="feather feather-user-minus">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <path d="M4.5,7a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M23 11h-6"/>
        </Wrapper>
    )

    export const UserPlus = props => (
        <Wrapper {...props} class="feather feather-user-plus">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <path d="M4.5,7a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M20 8v6M23 11h-6"/>
        </Wrapper>
    )

    export const UserX = props => (
        <Wrapper {...props} class="feather feather-user-x">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <path d="M4.5,7a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M18 8l5 5M23 8l-5 5"/>
        </Wrapper>
    )

    export const User = props => (
        <Wrapper {...props} class="feather feather-user">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <path d="M8,7a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
        </Wrapper>
    )

    export const Users = props => (
        <Wrapper {...props} class="feather feather-users">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <path d="M5,7a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </Wrapper>
    )

    export const Video = props => (
        <Wrapper {...props} class="feather feather-video">
            <path d="M23 7l-7 5 7 5V7z"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </Wrapper>
    )

    export const VideoOff = props => (
        <Wrapper {...props} class="feather feather-video-off">
            <path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10M1 1l22 22"/>
        </Wrapper>
    )

    export const Voicemail = props => (
        <Wrapper {...props} class="feather feather-voicemail">
            <path d="M1,11.5a4.5,4.5 0 1,0 9,0a4.5,4.5 0 1,0 -9,0"/>
            <path d="M14,11.5a4.5,4.5 0 1,0 9,0a4.5,4.5 0 1,0 -9,0"/>
            <path d="M5.5 16h13"/>
        </Wrapper>
    )

    export const Volume = props => (
        <Wrapper {...props} class="feather feather-volume">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
        </Wrapper>
    )

    export const Volume1 = props => (
        <Wrapper {...props} class="feather feather-volume-1">
            <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/>
        </Wrapper>
    )

    export const Volume2 = props => (
        <Wrapper {...props} class="feather feather-volume-2">
            <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
        </Wrapper>
    )

    export const VolumeX = props => (
        <Wrapper {...props} class="feather feather-volume-x">
            <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/>
        </Wrapper>
    )

    export const Watch = props => (
        <Wrapper {...props} class="feather feather-watch">
            <path d="M5,12a7,7 0 1,0 14,0a7,7 0 1,0 -14,0"/>
            <path d="M12 9v3l1.5 1.5M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"/>
        </Wrapper>
    )

    export const Wifi = props => (
        <Wrapper {...props} class="feather feather-wifi">
            <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
        </Wrapper>
    )

    export const WifiOff = props => (
        <Wrapper {...props} class="feather feather-wifi-off">
            <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
        </Wrapper>
    )

    export const Wind = props => (
        <Wrapper {...props} class="feather feather-wind">
            <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
        </Wrapper>
    )

    export const XCircle = props => (
        <Wrapper {...props} class="feather feather-x-circle">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
        </Wrapper>
    )

    export const XOctagon = props => (
        <Wrapper {...props} class="feather feather-x-octagon">
            <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6"/>
        </Wrapper>
    )

    export const XSquare = props => (
        <Wrapper {...props} class="feather feather-x-square">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <path d="M9 9l6 6M15 9l-6 6"/>
        </Wrapper>
    )

    export const X = props => (
        <Wrapper {...props} class="feather feather-x">
            <path d="M18 6L6 18M6 6l12 12"/>
        </Wrapper>
    )

    export const Youtube = props => (
        <Wrapper {...props} class="feather feather-youtube">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/>
        </Wrapper>
    )

    export const ZapOff = props => (
        <Wrapper {...props} class="feather feather-zap-off">
            <path d="M12.41 6.75L13 2l-2.43 2.92M18.57 12.91L21 10h-5.34M8 8l-5 6h9l-1 8 5-6M1 1l22 22"/>
        </Wrapper>
    )

    export const Zap = props => (
        <Wrapper {...props} class="feather feather-zap">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </Wrapper>
    )

    export const ZoomIn = props => (
        <Wrapper {...props} class="feather feather-zoom-in">
            <path d="M3,11a8,8 0 1,0 16,0a8,8 0 1,0 -16,0"/>
            <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
        </Wrapper>
    )

    export const ZoomOut = props => (
        <Wrapper {...props} class="feather feather-zoom-out">
            <path d="M3,11a8,8 0 1,0 16,0a8,8 0 1,0 -16,0"/>
            <path d="M21 21l-4.35-4.35M8 11h6"/>
        </Wrapper>
    )

</script>