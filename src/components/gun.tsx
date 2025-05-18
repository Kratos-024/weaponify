import React from 'react'

export const gun = () => {
  return (
    <div><div className="webgl">

            <canvas className="canvas" data-modeluid="a7e5c1db09b840abb96778c579033c9e" data-action="create-hotspot" aria-label="3D view of MP7A1" width="658" height="370" tabindex="0" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
            </canvas>

            <div className="loading-container">
                <div className="secondary-progress">
                    
                    <div className="secondary-progress-percentage">100 %</div>
                    <div className="secondary-progress-display" style="width: 100%;"></div>
                    
                </div>
                <div className="main-progress">
                    <img alt="Loading 3D Model" src="https://media.sketchfab.com/models/a7e5c1db09b840abb96778c579033c9e/thumbnails/27fd53fe01754508a157b778f0665225/099f69cefb1e4775a1420c43719b0c3c.jpeg" className="loading-thumbnail">
                    
                    <div className="main-progress-wrapper">
                        <div className="main-progress-percentage loading-percentage">100 %</div>
                        <p>Loading 3D model</p>
                        <div className="main-progress-display">
                            <div className="main-progress-display__progress" style="width: 100%;"></div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="hotspots"></div>

            <div className="gui enabled">

                <div className="animation-not-supported hidden">
                    <a href="#" className="close" aria-label="close"></a>
                    <p>Model is too heavy for your device and can not be rendered properly</p>
                </div>

                
                    <div className="hotspot-controls-responsive">
                        <div data-title="Previous Annotation" data-action="prev-annotation">
                            <div className="icon viewer-icon-caret-left"></div>
                        </div>
                        <div data-title="Next Annotation" data-action="next-annotation">
                            <div className="icon viewer-icon-caret-right"></div>
                        </div>
                    </div>
                

                
                    <div className="model-inspector">
                        <div className="model-inspector__menu">
                            <div className="model-inspector__minimize"><i className="viewer-icon-caret-down" aria-hidden="true"></i>Model Inspector</div>
                            <div className="model-inspector__content">
                                <div className="model-inspector__modes custom-scrollbar js-scrollable">
        <div className="model-inspector__wireframe">
            <p className="wireframe-title">        Wireframe         <span className="shortcut" title="Keyboard shortcut">           <kbd>5</kbd>        </span>        </p>        <div className="wireframe-colors">           <a className="colors-none " data-setting="wireframeEnable" data-value="0" title="Off">        </a><a className="colors-black " data-setting="wireframeColor" data-value="000000FF" title="Black">        </a><a className="colors-white " data-setting="wireframeColor" data-value="ffffffFF" title="White">        </a><a className="colors-red " data-setting="wireframeColor" data-value="ff0000FF" title="Red">        </a><a className="colors-blue " data-setting="wireframeColor" data-value="0000FFFF" title="Blue">        </a><a className="colors-green " data-setting="wireframeColor" data-value="00FF00FF" title="Green">        </a><a className="colors-yellow " data-setting="wireframeColor" data-value="FFFF00FF" title="Yellow">        </a>        </div>
        </div>
        <div className="model-inspector__single-sided-button" data-component="" id="view427"><div className="form-onoff-wrapper" data-selenium="switch-single-sided"><input className="form-onoff" type="checkbox" data-ref="input"><label className="form-onoff-actor" for=""></label><div className="form-onoff__label">Single Sided</div></div></div>
        
        
            <div className="mode__title">Viewport</div>
            <div className="toggle-button">
                <span className="toggle-button__option">
                    <input type="radio" name="splitType" data-value="3d" id="splitType-3d">
                    <label for="splitType-3d">3D</label>
                </span>
                <span className="toggle-button__option">
                    <input type="radio" name="splitType" data-value="split" id="splitType-split">
                    <label for="splitType-split">3D + 2D</label>
                </span>
                <span className="toggle-button__option">
                    <input type="radio" name="splitType" data-value="2d" id="splitType-2d">
                    <label for="splitType-2d">2D</label>
                </span>
            </div>
        
       
            
                <div className="mode__title">Render (1)</div>
            
            <ul>
                
                    <li className="mode selected" data-mode="Render (1)" data-value="Default" style="">
                        <i className="mode__icon viewer-icon-final-render"></i>
                        <span>Final Render</span>
                    </li>
                    
                    <li className="mode " data-mode="Render (1)" data-value="DefaultNoPostProcess" style="">
                        <i className="mode__icon viewer-icon-final-render"></i>
                        <span>No Post-Processing</span>
                    </li>
                    
            </ul>
       
            
                <div className="mode__title">Material channels (2)</div>
            
            <ul>
                
                    <li className="mode " data-mode="Material channels (2)" data-value="AlbedoPBR" style="">
                        <i className="mode__icon viewer-icon-diffuse"></i>
                        <span>Base Color</span>
                    </li>
                    
                    <li className="mode " data-mode="Material channels (2)" data-value="MetalnessPBR" style="">
                        <i className="mode__icon viewer-icon-metalness"></i>
                        <span>Metalness</span>
                    </li>
                    
                    <li className="mode " data-mode="Material channels (2)" data-value="RoughnessPBR" style="">
                        <i className="mode__icon viewer-icon-roughness"></i>
                        <span>Roughness</span>
                    </li>
                    
                    <li className="mode " data-mode="Material channels (2)" data-value="NormalMap" style="">
                        <i className="mode__icon viewer-icon-normal-map"></i>
                        <span>Normal Map</span>
                    </li>
                    
                    <li className="mode " data-mode="Material channels (2)" data-value="SpecularF0" style="">
                        <i className="mode__icon viewer-icon-specular"></i>
                        <span>Specular F0</span>
                    </li>
                    
            </ul>
       
            
                <div className="mode__title">Geometry (3)</div>
            
            <ul>
                
                    <li className="mode " data-mode="Geometry (3)" data-value="MatcapFlat" style="">
                        <i className="mode__icon viewer-icon-final-render"></i>
                        <span>Matcap</span>
                    </li>
                    
                    <li className="mode " data-mode="Geometry (3)" data-value="MatcapDetail" style="">
                        <i className="mode__icon viewer-icon-final-render"></i>
                        <span>Matcap+Surface</span>
                    </li>
                    
                    <li className="mode " data-mode="Geometry (3)" data-value="Wireframe" style="">
                        <i className="mode__icon viewer-icon-geometry"></i>
                        <span>Wireframe</span>
                    </li>
                    
                    <li className="mode " data-mode="Geometry (3)" data-value="VertexNormal" style="">
                        <i className="mode__icon viewer-icon-vertex-normals"></i>
                        <span>Vertex Normals</span>
                    </li>
                    
            </ul>
       
            
                <div className="mode__title">UV (4)</div>
            
            <ul>
                
                    <li className="mode " data-mode="UV (4)" data-value="UVChecker" style="">
                        <i className="mode__icon viewer-icon-UV"></i>
                        <span>UV Checker</span>
                    </li>
                    
            </ul>
       
    </div>
                            </div>
                        </div>
                        <div className="model-inspector__2D-options" style="visibility: hidden;">
                            <div className="model-inspector__UV-options"></div>
                            <div className="model-inspector__material-options"></div>
                        </div>
                        <div className="model-inspector__empty-2d-view">
                        </div>
                    </div>
                


                <div className="controls">
                    
    


                    

                        
                            <div className="animation-controls widget ">
                                <div className="timeline ">
                                    <div className="timeline-wrapper">
                                        <div className="track">
                                            <div className="bar">
                                            </div>
                                            <div className="knob">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="animation-controls__buttons">
                                    <a href="#" className="control play fa" aria-label="Play Animation"></a>
                                    <a href="#" className="control next fa" aria-label="Next Animation"></a>
                                    <div className="animation-timer control progress help" data-unit="time">00:00.00</div>
                                    <div className="animation-list control has-menu">
                                        <p className="animation-name"></p>
                                        <div className="control-menu list">
                                            <div className="animation__options">
                                                <div className="toggle-button">
                                                    <span className="toggle-button__option tooltip" data-tooltip="Repeat one">
                                                        <input type="radio" name="animation-cycle" data-value="one" id="animation-cycle-one">
                                                        <label for="animation-cycle-one"><i className="viewer-icon-cycle-repeat-one"></i></label>
                                                    </span>
                                                    <span className="toggle-button__option tooltip" data-tooltip="Repeat all">
                                                        <input type="radio" name="animation-cycle" data-value="all" id="animation-cycle-all">
                                                        <label for="animation-cycle-all"><i className="viewer-icon-cycle-repeat-all"></i></label>
                                                    </span>
                                                    <span className="toggle-button__option tooltip" data-tooltip="No repeat">
                                                        <input type="radio" name="animation-cycle" data-value="none" id="animation-cycle-none">
                                                        <label for="animation-cycle-none"><i className="viewer-icon-cycle-no-repeat"></i></label>
                                                    </span>
                                                </div>
                                                <div className="toggle-button">
                                                    <span className="toggle-button__option tooltip" data-tooltip="Speed x0.1">
                                                        <input type="radio" name="animation-speed" data-value="0.1" id="animation-speed-point-one">
                                                        <label for="animation-speed-point-one">x0.1</label>
                                                    </span>
                                                    <span className="toggle-button__option tooltip" data-tooltip="Speed x0.5">
                                                        <input type="radio" name="animation-speed" data-value="0.5" id="animation-speed-point-five">
                                                        <label for="animation-speed-point-five">x0.5</label>
                                                    </span>
                                                    <span className="toggle-button__option tooltip" data-tooltip="Speed x1">
                                                        <input type="radio" name="animation-speed" data-value="1" id="animation-speed-one">
                                                        <label for="animation-speed-one">x1</label>
                                                    </span>
                                                    <span className="toggle-button__option tooltip" data-tooltip="Speed x2">
                                                        <input type="radio" name="animation-speed" data-value="2" id="animation-speed-two">
                                                        <label for="animation-speed-two">x2</label>
                                                    </span>
                                                </div>
                                            </div>
                                            <ul className="js-scrollable"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                        
                            <div className="hotspot-controls widget has-menu">

                                <div data-title="Previous Annotation" data-action="prev-annotation">
                                    <div className="icon viewer-icon-caret-left"></div>
                                </div>

                                <div className="hotspot-name default" data-action="toggle-annotation-list">
                                    Select an annotation
                                </div>

                                <div data-title="Next Annotation" data-action="next-annotation">
                                    <div className="icon viewer-icon-caret-right"></div>
                                </div>

                                <div className="list hotspots-list">
<a href="#" data-action="toggle-visibility" className="annotations-visibility --hide"></a>
<a href="#" data-action="toggle-autopilot" className="annotations-autopilot --stopped"></a>
<ul className="js-scrollable">
    
</ul>
</div>

                            </div>
                        

                            <div className="general-controls widget ">
                            

                                
                                    <a className="control tooltip help" data-tooltip="Help">
                                        <i className="viewer-icon-question"></i>
                                    </a>
                                
                                
                                    <a className="control volume" title="Volume (M)" draggable="false">
                                        <i className="viewer-icon-volume-up"></i>
                                        <div className="volume-menu">
                                        <div className="widget slider-widget volume-slider-widget --vertical">          <div className="widget-wrapper">              <a className="fa-regular fa-volume-up"></a>              <div className="bar">                  <div className="slide" style="height: 100%;">                      <div className="cursor"></div>                  </div>              </div>          </div>      </div></div>
                                    </a>
                                
                                
                                    <a className="control tooltip settings has-menu" data-tooltip="Settings">
                                        <i className="viewer-icon-gear"></i>
                                        <div className="control-menu settings-menu">
                                            <div className="control-menu-wrapper">
                                                <div className="control-menu-list"><div className="setting" data-setting="viewerMode" data-setting-group="" data-setting-type="">   <p className="setting-label">Navigation</p>   <p className="setting-value" data-value="0">Orbit</p></div><div className="setting" data-setting="textureQuality" data-setting-group="textureQuality" data-setting-type="">   <p className="setting-label">Textures</p>   <p className="setting-value" data-value="1">HD</p></div></div>
                                                <div className="control-menu-pane"></div>
                                            </div>
                                        </div>
                                        <span className="control-badge active">HD</span>
                                    </a>
                                
                                
                                    <a className="control tooltip inspector" data-tooltip="Model Inspector (i)" data-action="inspector">
                                        <i className="viewer-icon-inspector"></i>
                                    </a>
                                
                                
                                
                                    <a className="control tooltip vr " data-tooltip="View in VR">
                                        <i className="viewer-icon-vr"></i>
                                    </a>
                                
                                
                                
                                    <a className="control tooltip tooltip-right-bound fullscreen --always-visible" data-tooltip="Fullscreen (f)">
                                        <i className="viewer-icon-fullscreen"></i>
                                    </a>
                                
                            
                            </div>
                    
                </div>

                

                <div className="viewer-hint widget disabled">
                    <div className="viewer-movehint">
                        <i className="icon"></i>
                        <span className="label">click &amp; hold<br>to rotate</span>
                    </div>
                </div>

            </div>

        </div></div>
  )
}
