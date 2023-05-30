import ButtonOdontogramV1 from './button-odontogram-v1'
import ButtonOdontogramV2 from './button-odontogram-v2'
import ButtonVariant1 from './button-variant-1'
import ButtonVariant2 from './button-variant-2'

export default function Test() {
  return (
    <>
      <div tw="m-12 grid gap-2 place-content-center">
        <div tw=" relative top-1/2 translate-y-1/2 m-auto">
          <div tw="h-6 w-4 border-x-8 border-b-0 border-t-[16px] border-solid border-x-transparent border-t-primary-500"></div>
        </div>
        <div tw="flex gap-0.5 justify-center">
          <ButtonVariant1 text="18" />
          <ButtonVariant1 text="17" />
          <ButtonVariant1 text="16" />
          <ButtonVariant1 text="15" />
          <ButtonVariant1 text="14" />
          <ButtonVariant2 text="13" />
          <ButtonVariant2 text="12" />
          <ButtonVariant2 text="11" />
          <ButtonVariant2 text="21" />
          <ButtonVariant2 text="22" />
          <ButtonVariant2 text="23" />
          <ButtonVariant1 text="24" />
          <ButtonVariant1 text="25" />
          <ButtonVariant1 text="26" />
          <ButtonVariant1 text="27" />
          <ButtonVariant1 text="28" />
        </div>
        <div tw="flex gap-0.5 justify-center">
          <ButtonVariant1 text="55" />
          <ButtonVariant1 text="54" />
          <ButtonVariant2 text="53" />
          <ButtonVariant2 text="52" />
          <ButtonVariant2 text="51" />
          <ButtonVariant2 text="61" />
          <ButtonVariant2 text="62" />
          <ButtonVariant2 text="63" />
          <ButtonVariant1 text="64" />
          <ButtonVariant1 text="65" />
        </div>
        <div tw=" grid gap-1 m-auto">
          <div tw="h-6 w-4 border-x-8 border-t-0 border-b-[16px] border-solid border-x-transparent border-b-primary-500"></div>
          <div tw="h-6 w-4 border-x-8 border-b-0 border-t-[16px] border-solid border-x-transparent border-t-primary-500"></div>
        </div>
        <div tw="flex gap-0.5 justify-center">
          <ButtonVariant1 tralling text="85" />
          <ButtonVariant1 tralling text="84" />
          <ButtonVariant2 tralling text="83" />
          <ButtonVariant2 tralling text="82" />
          <ButtonVariant2 tralling text="81" />
          <ButtonVariant2 tralling text="71" />
          <ButtonVariant2 tralling text="72" />
          <ButtonVariant2 tralling text="73" />
          <ButtonVariant1 tralling text="74" />
          <ButtonVariant1 tralling text="75" />
        </div>
        <div tw="flex gap-0.5 justify-center">
          <ButtonVariant1 tralling text="48" />
          <ButtonVariant1 tralling text="47" />
          <ButtonVariant1 tralling text="46" />
          <ButtonVariant1 tralling text="45" />
          <ButtonVariant1 tralling text="44" />
          <ButtonVariant2 tralling text="43" />
          <ButtonVariant2 tralling text="42" />
          <ButtonVariant2 tralling text="41" />
          <ButtonVariant2 tralling text="31" />
          <ButtonVariant2 tralling text="32" />
          <ButtonVariant2 tralling text="33" />
          <ButtonVariant1 tralling text="34" />
          <ButtonVariant1 tralling text="35" />
          <ButtonVariant1 tralling text="36" />
          <ButtonVariant1 tralling text="37" />
          <ButtonVariant1 tralling text="38" />
        </div>
        <div tw="relative -top-1/2 -translate-y-1/2  m-auto">
          <div tw="h-6 w-4 border-x-8 border-t-0 border-b-[16px] border-solid border-x-transparent border-b-primary-500"></div>
        </div>
      </div>
      <div tw="flex gap-[0.5px] justify-center m-12">
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV2 />
        <ButtonOdontogramV2 />
        <ButtonOdontogramV2 />
        <ButtonOdontogramV2 />
        <ButtonOdontogramV2 />
        <ButtonOdontogramV2 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
        <ButtonOdontogramV1 />
      </div>
    </>
  )
}
