import { Popover } from "@headlessui/react";
import { Info } from 'phosphor-react'
import { Container } from "./style";

export function InfoAboutAlerts(): JSX.Element {

    return (
        <Container>
            <Popover>
                <Popover.Button>
                    <Info weight="fill" />
                </Popover.Button>
                <Popover.Panel className='infoContent'>
                    <p>Alerts may be issued only on the current institute idiom and will be displayed in that language.</p>
                </Popover.Panel>
            </Popover>
        </Container>
    )
}