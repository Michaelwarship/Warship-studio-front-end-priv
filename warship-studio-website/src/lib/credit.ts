export function Credits(portfolio: any) {
    if (!portfolio) return []

    return [
        { role: 'CLIENT', names: portfolio.Client?.split(', ') ?? [] },
        { role: 'AGENCY', names: portfolio.Agency?.split(', ') ?? [] },
        {
            role: 'PRODUCTION COMPANY',
            names: portfolio.ProductionCompany?.split(', ') ?? [],
        },
        {
            role: 'CREATIVE DIRECTOR',
            names: portfolio.CreativeDirector?.split(', ') ?? [],
        },
        {
            role: 'ART DIRECTOR',
            names: portfolio.ArtDirector?.split(', ') ?? [],
        },
        { role: 'MODELLING', names: portfolio.Modelling?.split(', ') ?? [] },

        { role: 'DRONE PILOT', names: portfolio.DronePilot?.split(', ') ?? [] },

        { role: '3D DESIGN', names: portfolio.ThreeDDesign?.split(', ') ?? [] },

        { role: 'SCRIPT', names: portfolio.ScriptWriter?.split(', ') ?? [] },

        { role: 'COMPOSITOR', names: portfolio.Compositor?.split(', ') ?? [] },
        {
            role: 'GRAPHIC DESIGN',
            names: portfolio.GraphicDesign?.split(', ') ?? [],
        },
        { role: 'VIDEO EDITS', names: portfolio.VideoEdits?.split(', ') ?? [] },
        {
            role: 'SOUND AND SFX',
            names: portfolio.SoundAndSFX?.split(', ') ?? [],
        },
        { role: '2D DESIGN', names: portfolio.TwoDDesign?.split(', ') ?? [] },
        {
            role: 'MATTE PAINTING',
            names: portfolio.MattePainting?.split(', ') ?? [],
        },
        { role: 'DIRECTOR', names: portfolio.Director?.split(', ') ?? [] },
        {
            role: 'EXECUTIVE PRODUCER',
            names: portfolio.ExecutiveProducer?.split(', ') ?? [],
        },
        {
            role: 'CINEMATOGRAPHY',
            names: portfolio.Cinematography?.split(', ') ?? [],
        },
        {
            role: 'DESIGN STRATEGIST',
            names: portfolio.DesignStrategist?.split(', ') ?? [],
        },
        {
            role: '3D DESIGN',
            names: portfolio.ThreeDDesign?.split(', ') ?? [],
        },
    ].filter((credit) => credit.names.length > 0)
}
