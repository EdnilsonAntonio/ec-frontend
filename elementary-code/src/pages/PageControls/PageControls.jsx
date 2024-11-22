import './pagecontrols.css'
import Button from '../../components/UI/Button/Button'

function PageControls({nextLesson, coursePage}) {
    return (
        <div className="page-controls d-flex gap-3 justify-content-center">
            <Button
                type="secondary"
                text="Ver curso"
                onClick={coursePage}
            />
            <Button
                type="primary"
                text="Próxima lição"
                icon='visible'
                onClick={nextLesson}
            />
        </div>
    )
}

export default PageControls