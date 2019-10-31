export default ({ title, children, width, height, className, style }) => (
    <cx>
        <section class={`box w${width || 1} h${height || 1}`} className={className} style={style}>
            {<div class="box_title" text={title} />}
            {children}
        </section>
    </cx>
);
