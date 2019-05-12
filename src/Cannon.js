import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import styled from '@emotion/styled'

import * as ds from './design'

import CannonIcon from './svg/CannonIcon'

const CannonContainer = styled.div({
    width: "100%",
    position: "relative",
    filter: "url(#goo)",

    height: 200,
})

const CannonBall = posed(styled.div({
    ...ds.flexRow,
    position: "absolute",
    background: ds.colors.darkpurple,
    color: ds.colors.white,
    transformOrigin: "top right",
    overflow: "hidden",
}))({
    default: {
        zIndex: -1,
        opacity: 0,
        width: 45,
        height: 25,
        y: 0,
        left: "calc(100% - 75px)",

        transition: {
            opacity: {
                delay: 300
            },
            ease: "anticipate",
            duration: 500
        }
    },
    shot: {
        opacity: 1,
        width: 35,
        height: 35,
        left: 0,
        transition: {
            opacity: {
                duration: 150
            },
           ease: [1.5, 0, .0, 1.45],
           duration: 750
        },
    },
    expanded: {
        borderRadius: 2,
        zIndex: 0,
        width: "auto",
        height: "auto",
        transition: {
            ease: "anticipate",
            duration: 350
        }
    }
})

const DEFAULT_POSE = "default"
const SHOT_POSE = "shot"
const EXPANDED_POSE = "expanded"

const Cannon = () => {
    const [poseStatus, setPoseStatus] = useState(DEFAULT_POSE)
    const [isShot, setIsShot] = useState(false)

    useEffect(() => {
        setPoseStatus(isShot ? SHOT_POSE : DEFAULT_POSE)
    }, [isShot, setPoseStatus])

    const toggleState = React.useCallback(() => setIsShot(!isShot), [isShot, setIsShot])
    
    const handlePoseComplete = pose => {
        if (pose === SHOT_POSE) {
            setPoseStatus(EXPANDED_POSE)
        }
    }

    return (
        <Container>
            <CannonContainer>
                <Source onClick={toggleState}>
                </Source>
                <CannonBall pose={poseStatus} onPoseComplete={handlePoseComplete}>
                    <MenuContent>
                    <p>Home</p>
                    <p>Information</p>
                    <p>Monsters</p>
                    <p>News</p>
                    <p>F.A.Q</p>
                    </MenuContent>
                </CannonBall>
            </CannonContainer>
        </Container>
    )
}

const MenuContent = posed(styled.div({
    padding: 32,
    width: "100%",
    height: "100%",
    color: ds.colors.black
}))({
    default: {
        opacity: 0
    },
    shot: {
        opacity: 0
    },
    expanded: {
        opacity: 1
    }
})

const Source = styled.div({
    width: 35,
    height: 35,
    background: ds.colors.darkpurple,
    color: ds.colors.white,
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,

    svg: {
        width: 35,
        height: 35
    },

})

const Container = styled.div({
    ...ds.flexCol,
    width: "100%"
})

export default Cannon