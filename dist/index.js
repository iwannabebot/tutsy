var Overlay = /** @class */ (function () {
    function Overlay(id) {
        this.HostElement = document.getElementById(id);
        if (this.HostElement === null) {
            throw new DOMException("Host element with id '" + id + "' not found");
        }
        else {
            this.constructOverlay();
        }
    }
    Overlay.prototype.constructOverlay = function () {
        this.HostElement.style.display = "block";
        this.HostElement.style.background = "rgba(0,0,0,0.1)";
        this.HostElement.style.position = "absolute";
        this.HostElement.style.left = "0px";
        this.HostElement.style.top = "0px";
        this.HostElement.style.right = "0px";
        this.HostElement.style.bottom = "0px";
        var parentOffsetTop = this.HostElement.offsetTop;
        var parentOffsetLeft = this.HostElement.offsetLeft;
        var childOffsetTop = document.getElementById("loc3").offsetTop;
        var childOffsetLeft = document.getElementById("loc3").offsetLeft;
        var xOffset = parentOffsetLeft - childOffsetLeft;
        var yOffset = parentOffsetTop - childOffsetTop;
    };
    return Overlay;
}());
