import "../style.css";



export default function SectionContent({content}){

    return (
        <section className="section-content">
            <div className="container">
                {content}
            </div>
        </section>
    );
    
}