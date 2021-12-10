function Title (props) {
    const sizes = ['small', 'medium', 'large']

    const sizes_styles = {
        'small': "text-[20px] md:text-[25px]",
        'medium': "text-[25px] md:text-[35px]",
        'large': "text-[30px] md:text-[45px]",
    }

    let size = sizes[1]

    if (props?.size && sizes.includes(props.size)) {
        size = props.size
    }

    const size_style = sizes_styles[size]
    const default_style = "font-semibold tracking-wide"
    const styles = [size_style, default_style].join(" ")

    return (
        <div
            className={styles}
        >
            {props?.title}
        </div>
    )
}

export default Title
