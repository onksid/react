import ButtonWhiteBoard from '../button'
import IconFileDownload from '../icon/svg/file-download'

type FileDownloadProps = {
  onClick: () => void
}
export default function FileDownload({ onClick }: FileDownloadProps) {
  return (
    <ButtonWhiteBoard id="zoom-out" onClick={onClick}>
      <IconFileDownload />
    </ButtonWhiteBoard>
  )
}
